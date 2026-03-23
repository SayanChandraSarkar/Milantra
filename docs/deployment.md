# Deployment Notes

## Environment configuration

### Backend

- `PORT`: Express server port.
- `MONGODB_URI`: MongoDB connection string, ideally from MongoDB Atlas.
- `JWT_SECRET`: Shared secret used to sign auth tokens.
- `CLIENT_URL`: Frontend origin allowed by CORS.

### Frontend

- `VITE_API_URL`: Public API base URL, typically `https://api.example.com/api/v1`.

## Deployment recommendation

- Deploy `apps/api` to Render, Railway, or Fly.io.
- Provision MongoDB Atlas with backups and IP/network restrictions.
- Run `npm install`, `npm run build`, and `npm run seed` only in non-production/demo environments.
- Deploy `apps/web` to Vercel or Netlify with `VITE_API_URL` pointing to the backend.
- Use separate MongoDB databases for local, staging, and production environments.

## Production hardening checklist

- Add structured logging, rate limiting, and request IDs.
- Introduce admin moderation and verification review flows.
- Move chat to WebSockets or SSE for live messaging.
- Add object storage for profile images.
- Add background workers for notifications, moderation, and analytics.
