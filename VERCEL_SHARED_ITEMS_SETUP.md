# Vercel Setup For Shared Products (All Users)

This repo now includes serverless endpoints:

- `GET/PUT /api/state/global`
- `GET/PUT /api/state/user`
- `GET /api/health`

These endpoints store state in Upstash Redis (Vercel KV compatible) so new products persist for everyone.

## 1) Add KV to your Vercel project

1. Open your Vercel project dashboard.
2. Go to `Storage`.
3. Create/attach a `KV` database (Upstash Redis).
4. Connect it to this project.

Vercel will inject env vars automatically in most cases:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

If your project uses older naming, these are also supported:

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

## 2) Redeploy

Trigger a new deploy from Vercel (or push to `main`).

## 3) Verify

Open:

- `<your-vercel-domain>/api/health` (should return `{ "ok": true, ... }`)
- `<your-vercel-domain>/api/state/global` (should return JSON)

## Notes

- `cloud-config.js` is set to:
  - `apiBaseUrl: '/api'`
  - `enabled: true`
  - `allowLocalProductOverrides: false`
- This makes cloud global state the catalog source across visitors.
