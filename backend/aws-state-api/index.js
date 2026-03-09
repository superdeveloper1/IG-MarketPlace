const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand, PutCommand } = require('@aws-sdk/lib-dynamodb');

const TABLE_NAME = process.env.STATE_TABLE_NAME;
const GLOBAL_STATE_PARTITION_KEY = String(process.env.GLOBAL_STATE_PARTITION_KEY || 'state#global');
const USER_STATE_PARTITION_PREFIX = String(process.env.USER_STATE_PARTITION_PREFIX || 'state#user#');
const DEFAULT_USER_ID = String(process.env.DEFAULT_USER_ID || 'anon:guest');
const CORS_ORIGIN = String(process.env.CORS_ORIGIN || '*');

if (!TABLE_NAME) {
    throw new Error('Missing required env var: STATE_TABLE_NAME');
}

const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

function response(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': CORS_ORIGIN,
            'Access-Control-Allow-Headers': 'Content-Type,X-Api-Key,Authorization,X-Ig-User-Id',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,OPTIONS'
        },
        body: JSON.stringify(body)
    };
}

function requestMethod(event) {
    if (event && event.requestContext && event.requestContext.http && event.requestContext.http.method) {
        return String(event.requestContext.http.method).toUpperCase();
    }
    return String(event && event.httpMethod ? event.httpMethod : 'GET').toUpperCase();
}

function requestPath(event) {
    if (event && typeof event.rawPath === 'string' && event.rawPath.length > 0) return event.rawPath;
    return String(event && event.path ? event.path : '/');
}

function requestHeaders(event) {
    return event && event.headers && typeof event.headers === 'object'
        ? event.headers
        : {};
}

function requestQueryParams(event) {
    return event && event.queryStringParameters && typeof event.queryStringParameters === 'object'
        ? event.queryStringParameters
        : {};
}

function pathMatches(path, route) {
    return path === route || path.endsWith(route);
}

function safeParseJson(rawValue) {
    if (!rawValue || typeof rawValue !== 'string') return null;
    try {
        return JSON.parse(rawValue);
    } catch (error) {
        return null;
    }
}

function sanitizeUserId(value) {
    const normalized = String(value || '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9._:@-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 180);
    return normalized || DEFAULT_USER_ID;
}

function readUserIdFromRequest(event) {
    const headers = requestHeaders(event);
    const queryParams = requestQueryParams(event);
    const rawHeaderUserId = headers['x-ig-user-id'] || headers['X-Ig-User-Id'] || headers['X-IG-USER-ID'];
    const rawQueryUserId = queryParams.userId || queryParams.userid || queryParams.user_id;
    return sanitizeUserId(rawHeaderUserId || rawQueryUserId || DEFAULT_USER_ID);
}

function stateKeyForUser(userId) {
    return USER_STATE_PARTITION_PREFIX + sanitizeUserId(userId);
}

function sanitizeGlobalState(input) {
    if (!input || typeof input !== 'object') return null;
    const source = input.data && typeof input.data === 'object' ? input.data : input;
    const out = {};
    if (Array.isArray(source.products)) out.products = source.products;
    if (Array.isArray(source.customCategories)) out.customCategories = source.customCategories;
    if (Array.isArray(source.removedCategoryValues)) out.removedCategoryValues = source.removedCategoryValues;
    if (Array.isArray(source.users)) out.users = source.users;

    return Object.keys(out).length > 0 ? out : null;
}

function sanitizeUserState(input) {
    if (!input || typeof input !== 'object') return null;
    const source = input.data && typeof input.data === 'object' ? input.data : input;
    const out = {};

    if (Array.isArray(source.cart)) out.cart = source.cart;
    if (Array.isArray(source.wishlist)) out.wishlist = source.wishlist;
    if (Array.isArray(source.orders)) out.orders = source.orders;

    if (source.ui && typeof source.ui === 'object') out.ui = source.ui;

    return Object.keys(out).length > 0 ? out : null;
}

async function loadStateByKey(partitionKey) {
    const result = await ddb.send(new GetCommand({
        TableName: TABLE_NAME,
        Key: {
            pk: partitionKey
        }
    }));
    return result && result.Item ? result.Item : null;
}

async function saveStateByKey(partitionKey, data) {
    const item = {
        pk: partitionKey,
        updatedAt: new Date().toISOString(),
        data: data
    };
    await ddb.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: item
    }));
    return item;
}

exports.handler = async function handler(event) {
    const method = requestMethod(event);
    const path = requestPath(event);

    if (method === 'OPTIONS') {
        return response(200, { ok: true });
    }

    if (method === 'GET' && pathMatches(path, '/health')) {
        return response(200, {
            ok: true,
            service: 'ig-state-api',
            now: new Date().toISOString()
        });
    }

    if (method === 'GET' && (pathMatches(path, '/state') || pathMatches(path, '/state/global'))) {
        try {
            const item = await loadStateByKey(GLOBAL_STATE_PARTITION_KEY);
            return response(200, {
                scope: 'global',
                data: item && item.data ? item.data : null,
                updatedAt: item && item.updatedAt ? item.updatedAt : null
            });
        } catch (error) {
            console.error('Failed to read global state', error);
            return response(500, { message: 'Failed to read global state' });
        }
    }

    if ((method === 'PUT' || method === 'POST') && (pathMatches(path, '/state') || pathMatches(path, '/state/global'))) {
        const payload = safeParseJson(event && event.body ? event.body : '');
        if (!payload || typeof payload !== 'object') {
            return response(400, { message: 'Body must be valid JSON.' });
        }

        const normalized = sanitizeGlobalState(payload);
        if (!normalized) {
            return response(400, { message: 'No valid global state fields in request.' });
        }

        try {
            const stored = await saveStateByKey(GLOBAL_STATE_PARTITION_KEY, normalized);
            return response(200, {
                ok: true,
                scope: 'global',
                updatedAt: stored.updatedAt
            });
        } catch (error) {
            console.error('Failed to save global state', error);
            return response(500, { message: 'Failed to save global state' });
        }
    }

    if (method === 'GET' && pathMatches(path, '/state/user')) {
        const userId = readUserIdFromRequest(event);
        const partitionKey = stateKeyForUser(userId);
        try {
            const item = await loadStateByKey(partitionKey);
            return response(200, {
                scope: 'user',
                userId: userId,
                data: item && item.data ? item.data : null,
                updatedAt: item && item.updatedAt ? item.updatedAt : null
            });
        } catch (error) {
            console.error('Failed to read user state', error);
            return response(500, { message: 'Failed to read user state' });
        }
    }

    if ((method === 'PUT' || method === 'POST') && pathMatches(path, '/state/user')) {
        const payload = safeParseJson(event && event.body ? event.body : '');
        if (!payload || typeof payload !== 'object') {
            return response(400, { message: 'Body must be valid JSON.' });
        }

        const normalized = sanitizeUserState(payload);
        if (!normalized) {
            return response(400, { message: 'No valid user state fields in request.' });
        }

        const userId = readUserIdFromRequest(event);
        const partitionKey = stateKeyForUser(userId);
        try {
            const stored = await saveStateByKey(partitionKey, normalized);
            return response(200, {
                ok: true,
                scope: 'user',
                userId: userId,
                updatedAt: stored.updatedAt
            });
        } catch (error) {
            console.error('Failed to save user state', error);
            return response(500, { message: 'Failed to save user state' });
        }
    }

    return response(404, { message: 'Route not found' });
};
