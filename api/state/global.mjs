import { loadStateByKey, saveStateByKey } from "../_upstash-store.mjs";
import {
  handleOptions,
  readJsonBody,
  sanitizeGlobalState,
  sendJson,
} from "../_state-utils.mjs";

const GLOBAL_STATE_PARTITION_KEY = String(
  process.env.GLOBAL_STATE_PARTITION_KEY || "state#global"
);

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  const method = String(req.method || "GET").toUpperCase();

  if (method === "GET") {
    try {
      const item = await loadStateByKey(GLOBAL_STATE_PARTITION_KEY);
      sendJson(res, 200, {
        scope: "global",
        data: item && item.data ? item.data : null,
        updatedAt: item && item.updatedAt ? item.updatedAt : null,
      });
      return;
    } catch (error) {
      console.error("Failed to read global state:", error);
      sendJson(res, 500, { message: "Failed to read global state" });
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

  const normalized = sanitizeGlobalState(payload);
  if (!normalized) {
    sendJson(res, 400, { message: "No valid global state fields in request." });
    return;
  }

  try {
    const stored = await saveStateByKey(GLOBAL_STATE_PARTITION_KEY, normalized);
    sendJson(res, 200, {
      ok: true,
      scope: "global",
      updatedAt: stored.updatedAt,
    });
  } catch (error) {
    console.error("Failed to save global state:", error);
    sendJson(res, 500, { message: "Failed to save global state" });
  }
}
