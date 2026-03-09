import { handleOptions, sendJson } from "./_state-utils.mjs";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  const method = String(req.method || "GET").toUpperCase();
  if (method !== "GET") {
    sendJson(res, 405, { message: "Method not allowed" });
    return;
  }

  sendJson(res, 200, {
    ok: true,
    service: "ig-state-api-vercel",
    now: new Date().toISOString(),
  });
}
