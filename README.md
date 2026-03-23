# Milantra MVP Monorepo

Milantra is an opinionated full-stack MVP for a culturally aware matchmaking platform. This repository uses a TypeScript monorepo split into a React frontend and an Express + MongoDB backend, optimized for fast iteration and familiar industry-standard Node service patterns.

## Concept

Milantra helps users create profiles, discover compatible matches using cultural and lifestyle filters, send interest requests, and start chat only after mutual interest.

## Tech Stack

- **Frontend:** React, TypeScript, Vite, React Router, TanStack Query, CSS modules/Tailwind-ready styling
- **Backend:** Node.js, Express, TypeScript, MongoDB, Mongoose, Zod, JWT auth, bcrypt
- **Database:** MongoDB Atlas or self-hosted MongoDB
- **Testing:** Vitest + React Testing Library (frontend), Vitest + Supertest (backend)
- **Deployment:** Vercel/Netlify for frontend, Render/Railway/Fly.io for backend, MongoDB Atlas for managed data

## Project-wide Conventions

- TypeScript across frontend and backend.
- Express backend organized by `models`, `services`, `controllers`, `routes`, and `middleware`.
- Business logic lives in services; controllers stay thin.
- MongoDB documents are normalized enough for core flows, with denormalized profile fields only where it improves read performance.
- REST API versioned under `/api/v1`.
- Zod validates request payloads at service boundaries.
- Seed script creates realistic demo data for product walkthroughs.

## MVP Feature Set

### In scope

- Register / login
- Create and update profile (basic bio, family, preferences, verification flag)
- Browse users with filters: location, community, language, age range
- Send interest
- Accept / reject interest
- Basic chat after mutual interest
- Manual verification flag (admin-operated for MVP)

### Out of scope for v1

- Payments
- Video calls
- AI matching
- Events / communities
- Recommendation ranking

## Top-level Structure

```text
.
├── .gitignore
├── README.md
├── package.json
├── tsconfig.base.json
├── apps
│   ├── api
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vitest.config.ts
│   │   ├── .env.example
│   │   ├── src
│   │   │   ├── server.ts
│   │   │   ├── app.ts
│   │   │   ├── config
│   │   │   │   ├── db.ts
│   │   │   │   └── env.ts
│   │   │   ├── controllers
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── chat.controller.ts
│   │   │   │   ├── interest.controller.ts
│   │   │   │   └── profile.controller.ts
│   │   │   ├── middleware
│   │   │   │   ├── auth.middleware.ts
│   │   │   │   └── error.middleware.ts
│   │   │   ├── models
│   │   │   │   ├── Conversation.ts
│   │   │   │   ├── Interest.ts
│   │   │   │   ├── Message.ts
│   │   │   │   └── User.ts
│   │   │   ├── routes
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── chat.routes.ts
│   │   │   │   ├── interest.routes.ts
│   │   │   │   ├── profile.routes.ts
│   │   │   │   └── index.ts
│   │   │   ├── scripts
│   │   │   │   └── seed.ts
│   │   │   └── services
│   │   │       ├── auth.service.ts
│   │   │       ├── chat.service.ts
│   │   │       ├── interest.service.ts
│   │   │       └── profile.service.ts
│   │   └── tests
│   │       └── app.test.ts
│   └── web
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       ├── vitest.config.ts
│       ├── .env.example
│       ├── index.html
│       ├── public
│       │   └── favicon.svg
│       └── src
│           ├── main.tsx
│           ├── App.tsx
│           ├── assets/logo.svg
│           ├── styles/index.css
│           ├── lib/api.ts
│           ├── components
│           │   ├── FilterBar.tsx
│           │   ├── MatchCard.tsx
│           │   └── Navbar.tsx
│           ├── features
│           │   ├── auth/AuthForm.tsx
│           │   ├── chat/ChatWindow.tsx
│           │   └── discovery/MatchGrid.tsx
│           └── pages
│               ├── HomePage.tsx
│               ├── LoginPage.tsx
│               └── ProfilePage.tsx
└── docs
    └── deployment.md
```

## Database shape

### collections

- `users`: auth fields, profile details, languages, family info, verification state, matching preferences
- `interests`: sender/receiver references, status, timestamps
- `conversations`: normalized participant pair and match metadata
- `messages`: conversation reference, sender reference, body, timestamps

## Sample seed users

- `aisha@example.com` / `password123`
- `rohan@example.com` / `password123`
- `zara@example.com` / `password123`

## Run locally

1. Copy `apps/api/.env.example` to `apps/api/.env` and `apps/web/.env.example` to `apps/web/.env`.
2. Install dependencies from the repository root: `npm install`.
3. Start MongoDB locally or provision MongoDB Atlas.
4. Seed demo data from `apps/api`: `npm run seed`.
5. Start both apps from the root: `npm run dev`.

## Extension ideas after MVP

- Add role-based admin tooling for verification review.
- Upgrade chat to WebSockets with Socket.IO.
- Add photo upload and moderation workflows.
- Add recommendations and saved searches.
- Add background jobs for notifications and trust/safety reviews.
