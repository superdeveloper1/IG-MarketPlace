const CORS_ORIGIN = String(process.env.CORS_ORIGIN || "*");

export function jsonResponse(statusCode, body) {
  return new Response(JSON.stringify(body), {
    status: Number(statusCode) || 500,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": CORS_ORIGIN,
      "access-control-allow-headers":
        "Content-Type,X-Api-Key,Authorization,X-Ig-User-Id",
      "access-control-allow-methods": "GET,PUT,POST,OPTIONS",
    },
  });
}

export function optionsResponse() {
  return jsonResponse(200, { ok: true });
}

export async function readJsonBody(request) {
  if (!request) return null;
  const text = await request.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  }
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

export function readUserIdFromRequest(request) {
  const url = new URL(request.url);
  const query = url.searchParams;
  const headerUserId =
    request.headers.get("x-ig-user-id") ||
    request.headers.get("X-Ig-User-Id") ||
    request.headers.get("X-IG-USER-ID");
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
