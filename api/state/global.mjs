import { loadStateByKey, saveStateByKey } from "../_upstash-store.mjs";
import {
  jsonResponse,
  optionsResponse,
  readJsonBody,
  sanitizeGlobalState,
} from "../_state-utils.mjs";

const GLOBAL_STATE_PARTITION_KEY = String(
  process.env.GLOBAL_STATE_PARTITION_KEY || "state#global"
);

export async function OPTIONS() {
  return optionsResponse();
}

export async function GET() {
  try {
    const item = await loadStateByKey(GLOBAL_STATE_PARTITION_KEY);
    return jsonResponse(200, {
      scope: "global",
      data: item && item.data ? item.data : null,
      updatedAt: item && item.updatedAt ? item.updatedAt : null,
    });
  } catch (error) {
    console.error("Failed to read global state:", error);
    return jsonResponse(500, { message: "Failed to read global state" });
  }
}

async function upsertGlobal(request) {
  const payload = await readJsonBody(request);
  if (!payload || typeof payload !== "object") {
    return jsonResponse(400, { message: "Body must be valid JSON." });
  }

  const normalized = sanitizeGlobalState(payload);
  if (!normalized) {
    return jsonResponse(400, { message: "No valid global state fields in request." });
  }

  try {
    const stored = await saveStateByKey(GLOBAL_STATE_PARTITION_KEY, normalized);
    return jsonResponse(200, {
      ok: true,
      scope: "global",
      updatedAt: stored.updatedAt,
    });
  } catch (error) {
    console.error("Failed to save global state:", error);
    return jsonResponse(500, { message: "Failed to save global state" });
  }
}

export async function PUT(request) {
  return upsertGlobal(request);
}

export async function POST(request) {
  return upsertGlobal(request);
}
