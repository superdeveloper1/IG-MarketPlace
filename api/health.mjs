import { jsonResponse, optionsResponse } from "./_state-utils.mjs";

export async function OPTIONS() {
  return optionsResponse();
}

export async function GET() {
  return jsonResponse(200, {
    ok: true,
    service: "ig-state-api-vercel",
    now: new Date().toISOString(),
  });
}
