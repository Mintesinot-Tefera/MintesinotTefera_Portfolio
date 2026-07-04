# Mintesinot Tefera — Portfolio

A modern, dark-themed personal portfolio built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000


## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset is auto-detected as **Next.js** — just click **Deploy**.

Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Project structure

```
app/
  layout.js        # metadata, fonts, global styles
  page.js          # assembles all sections
  globals.css      # Tailwind + custom styles
components/         # Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
lib/data.js        # ← all your content lives here
public/            # profile.jpg + your CV PDF go here
```

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev`   | Start the dev server |
| `npm run build` | Production build |
| `npm start`     | Run the production build |

---

Built with Next.js & Tailwind CSS.
