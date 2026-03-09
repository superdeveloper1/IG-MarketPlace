import { loadStateByKey, saveStateByKey } from "../_upstash-store.mjs";
import {
  handleOptions,
  readJsonBody,
  readUserIdFromRequest,
  sanitizeUserState,
  sendJson,
} from "../_state-utils.mjs";

const USER_STATE_PARTITION_PREFIX = String(
  process.env.USER_STATE_PARTITION_PREFIX || "state#user#"
);

function stateKeyForUser(userId) {
  return USER_STATE_PARTITION_PREFIX + userId;
}

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  const method = String(req.method || "GET").toUpperCase();
  const userId = readUserIdFromRequest(req);
  const partitionKey = stateKeyForUser(userId);

  if (method === "GET") {
    try {
      const item = await loadStateByKey(partitionKey);
      sendJson(res, 200, {
        scope: "user",
        userId: userId,
        data: item && item.data ? item.data : null,
        updatedAt: item && item.updatedAt ? item.updatedAt : null,
      });
      return;
    } catch (error) {
      console.error("Failed to read user state:", error);
      sendJson(res, 500, { message: "Failed to read user state" });
      return;
    }
  }

  if (method !== "PUT" && method !== "POST") {
    sendJson(res, 405, { message: "Method not allowed" });
    return;
  }

  const payload = readJsonBody(req);
  if (!payload || typeof payload !== "object") {
    sendJson(res, 400, { message: "Body must be valid JSON." });
    return;
  }

  const normalized = sanitizeUserState(payload);
  if (!normalized) {
    sendJson(res, 400, { message: "No valid user state fields in request." });
    return;
  }

  try {
    const stored = await saveStateByKey(partitionKey, normalized);
    sendJson(res, 200, {
      ok: true,
      scope: "user",
      userId: userId,
      updatedAt: stored.updatedAt,
    });
  } catch (error) {
    console.error("Failed to save user state:", error);
    sendJson(res, 500, { message: "Failed to save user state" });
  }
}
