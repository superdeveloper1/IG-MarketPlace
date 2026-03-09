const CORS_ORIGIN = String(process.env.CORS_ORIGIN || "*");

export function applyCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", CORS_ORIGIN);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,X-Api-Key,Authorization,X-Ig-User-Id"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
}

export function sendJson(res, statusCode, body) {
  applyCorsHeaders(res);
  res.status(Number(statusCode) || 500).json(body || {});
}

export function handleOptions(req, res) {
  if (String(req.method || "").toUpperCase() !== "OPTIONS") return false;
  sendJson(res, 200, { ok: true });
  return true;
}

export function readJsonBody(req) {
  if (!req) return null;
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch (error) {
      return null;
    }
  }
  return null;
}

export function sanitizeUserId(value) {
  const normalized = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._:@-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180);
  return normalized || "anon:guest";
}

export function readUserIdFromRequest(req) {
  const url = new URL(req.url || "/", "http://localhost");
  const query = url.searchParams;
  const headerUserId =
    (req.headers && (req.headers["x-ig-user-id"] || req.headers["X-Ig-User-Id"] || req.headers["X-IG-USER-ID"])) ||
    "";
  const queryUserId =
    query.get("userId") || query.get("userid") || query.get("user_id");
  return sanitizeUserId(headerUserId || queryUserId || "anon:guest");
}

export function sanitizeGlobalState(input) {
  if (!input || typeof input !== "object") return null;
  const source = input.data && typeof input.data === "object" ? input.data : input;
  const out = {};
  if (Array.isArray(source.products)) out.products = source.products;
  if (Array.isArray(source.customCategories)) out.customCategories = source.customCategories;
  if (Array.isArray(source.removedCategoryValues)) out.removedCategoryValues = source.removedCategoryValues;
  if (Array.isArray(source.users)) out.users = source.users;
  return Object.keys(out).length > 0 ? out : null;
}

export function sanitizeUserState(input) {
  if (!input || typeof input !== "object") return null;
  const source = input.data && typeof input.data === "object" ? input.data : input;
  const out = {};
  if (Array.isArray(source.cart)) out.cart = source.cart;
  if (Array.isArray(source.wishlist)) out.wishlist = source.wishlist;
  if (Array.isArray(source.orders)) out.orders = source.orders;
  if (source.ui && typeof source.ui === "object") out.ui = source.ui;
  return Object.keys(out).length > 0 ? out : null;
}
