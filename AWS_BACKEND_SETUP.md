# Backend Infrastructure and Cloud Integrations (AWS Preferred)

This project now includes an AWS-ready backend starter:

- `backend/aws-state-api/`: Lambda API that reads/writes marketplace app state
- `infra/aws-sam/template.yaml`: AWS SAM infrastructure definition
- `cloud-config.js`: Frontend runtime configuration for cloud sync

## What was integrated

- Frontend cloud bootstrap:
  - Shared app/catalog state from `GET /state/global`
  - Account-scoped state from `GET /state/user` with `x-ig-user-id`
- Frontend cloud sync:
  - Shared app/catalog state pushed to `PUT /state/global`
  - Account-scoped state pushed to `PUT /state/user` with `x-ig-user-id`
- Local fallback: if cloud is disabled/unavailable, app keeps using local/session storage

## AWS architecture

- API Gateway HTTP API
- Lambda (Node.js 20)
- DynamoDB table (`pk` hash key) for scoped state snapshots
  - `state#global`: shared products/categories/users
  - `state#user#<id>`: per-user cart/wishlist/orders/ui

## Deploy with AWS SAM

0. Configure AWS credentials first:
   - `aws login` (or your existing IAM/SSO profile workflow)
1. Install dependencies for Lambda:
   - `cd backend/aws-state-api`
   - `npm install`
2. Build and deploy from repo root:
   - `sam build --template-file infra/aws-sam/template.yaml`
   - `sam deploy --guided`
3. Copy `ApiBaseUrl` output after deploy.
4. Update `cloud-config.js`:
   - Set `apiBaseUrl` to the output URL
   - Set `enabled` to `true`
   - Optionally set `apiKey` if you enforce API keys

## Fast commands (PowerShell)

- If script execution is restricted on Windows, run scripts with:
  - `powershell -ExecutionPolicy Bypass -File .\scripts\<script-name>.ps1 ...`
- Prereq check:
  - `.\scripts\check-aws-tooling.ps1 -CheckLambdaDeps`
- Build + deploy (guided):
  - `.\scripts\deploy-aws.ps1 -Guided`
- Build + deploy (non-guided):
  - `.\scripts\deploy-aws.ps1 -StackName ig-marketplace-backend -Region us-east-1 -StageName prod -CorsOrigin "*"`
- Write deployed API URL into frontend config and enable cloud sync:
  - `.\scripts\set-cloud-config.ps1 -ApiBaseUrl "https://<api-id>.execute-api.us-east-1.amazonaws.com/prod" -Enable`

## API routes

- `GET /health`: health check
- `GET /state` and `GET /state/global`: shared state
- `PUT /state` and `PUT /state/global`: shared state upsert
- `GET /state/user`: user-scoped state (`x-ig-user-id` header)
- `PUT /state/user`: user-scoped state upsert (`x-ig-user-id` header)
- `POST` variants are accepted for compatibility

## Notes

- User isolation here is logical/app-level (`x-ig-user-id` partitioning). It is not strong security by itself.
- In this model, `orders` are user-scoped (an account only sees its own orders).
- For production security, require JWT auth (Cognito authorizer) and derive user id from token claims server-side.
