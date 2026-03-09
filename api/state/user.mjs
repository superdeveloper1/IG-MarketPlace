import { loadStateByKey, saveStateByKey } from "../_upstash-store.mjs";
import {
  jsonResponse,
  optionsResponse,
  readJsonBody,
  readUserIdFromRequest,
  sanitizeUserState,
} from "../_state-utils.mjs";

const USER_STATE_PARTITION_PREFIX = String(
  process.env.USER_STATE_PARTITION_PREFIX || "state#user#"
);

function stateKeyForUser(userId) {
  return USER_STATE_PARTITION_PREFIX + userId;
}

export async function OPTIONS() {
  return optionsResponse();
}

export async function GET(request) {
  const userId = readUserIdFromRequest(request);
  const partitionKey = stateKeyForUser(userId);
  try {
    const item = await loadStateByKey(partitionKey);
    return jsonResponse(200, {
      scope: "user",
      userId: userId,
      data: item && item.data ? item.data : null,
      updatedAt: item && item.updatedAt ? item.updatedAt : null,
    });
  } catch (error) {
    console.error("Failed to read user state:", error);
    return jsonResponse(500, { message: "Failed to read user state" });
  }
}

async function upsertUser(request) {
  const payload = await readJsonBody(request);
  if (!payload || typeof payload !== "object") {
    return jsonResponse(400, { message: "Body must be valid JSON." });
  }

  const normalized = sanitizeUserState(payload);
  if (!normalized) {
    return jsonResponse(400, { message: "No valid user state fields in request." });
  }

  const userId = readUserIdFromRequest(request);
  const partitionKey = stateKeyForUser(userId);
  try {
    const stored = await saveStateByKey(partitionKey, normalized);
    return jsonResponse(200, {
      ok: true,
      scope: "user",
      userId: userId,
      updatedAt: stored.updatedAt,
    });
  } catch (error) {
    console.error("Failed to save user state:", error);
    return jsonResponse(500, { message: "Failed to save user state" });
  }
}

export async function PUT(request) {
  return upsertUser(request);
}

export async function POST(request) {
  return upsertUser(request);
}
