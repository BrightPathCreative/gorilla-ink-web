# Gorilla Ink Tattoo Studio — Website

Next.js (App Router) site for [Gorilla Ink](https://www.instagram.com/gorillaink.tattoos/) — Oakleigh & Hughesdale, Melbourne.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (no trailing slash) — used for JSON-LD / Open Graph when set |
| `NEXT_PUBLIC_GHL_FORM_EMBED_URL` | GoHighLevel booking iframe `src` URL; if unset, a mock form is shown |

On **Vercel**, add these under Project → Settings → Environment Variables (Production / Preview as needed).

## Deploy: GitHub + Vercel

1. **Push this repo to GitHub** (see below if you have not created the remote yet).
2. Log in to [vercel.com](https://vercel.com) → **Add New…** → **Project** → **Import** your GitHub repository.
3. Framework preset: **Next.js**. Root directory: **.** (this project is the repo root).
4. Add the environment variables from `.env.example`, then **Deploy**.

Production URL will look like `https://<project>.vercel.app`; you can add a custom domain under Project → **Domains**.

### First-time GitHub push

If there is no `origin` yet, create an empty repository on GitHub (no README), then:

```bash
git remote add origin https://github.com/<YOUR_USER>/<YOUR_REPO>.git
git branch -M main
git push -u origin main
```

Or with [GitHub CLI](https://cli.github.com/) (`gh auth login` once):

```bash
gh repo create <YOUR_REPO> --public --source=. --remote=origin --push
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |
