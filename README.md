# payments-api

Public merchant-facing REST API for **Loxley Orchestrate**: payment intents, captures, refunds, webhooks and merchant API keys.

- **Owner:** Payments Core (Laura Kaminski). The checkout module (`src/checkout`) is being rebuilt with Codebridge Labs.
- **On-call:** PagerDuty service `payments-api`.

## Stack

- Node.js 14 + TypeScript 5, Express 4
- PostgreSQL 15 (Amazon RDS) via `pg`
- Redis 7 (Amazon ElastiCache) for idempotency keys and rate limiting
- Kafka (Amazon MSK) via `kafkajs` for payment events
- Outbound HTTP to acquirers via `axios`, `stripe` and `@adyen/api-library`

## Authentication

Merchants authenticate with API keys to obtain a JWT access token (`POST /v1/auth/token`). Tokens are signed with HS256 using the `jsonwebtoken` library and are valid for 24 hours.

## Card data

This service never receives raw card numbers. Card details are captured by Loxley hosted fields and exchanged for Vault tokens before reaching this API.

## Running locally

```bash
nvm use 14
npm ci
cp .env.example .env
docker compose up -d postgres redis kafka
npm run dev
```

## Deployment

Merges to `main` build a container image in GitHub Actions and push it to ECR (`loxley-shared`). Argo CD deploys to staging automatically and to production after manual approval.

## Support

Security questions go to security@loxleypayments.com.
