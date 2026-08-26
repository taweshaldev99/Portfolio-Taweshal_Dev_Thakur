# taweshaldev.com.np

Portfolio website of **Taweshal Dev Thakur**, a Python Developer and Data Engineering Enthusiast based in Kathmandu, Nepal.

Live: **https://taweshaldev.com.np**

## Stack

- **Next.js 15** (App Router) with **static export** (`output: "export"`) for pre-rendered HTML and no server
- **React 19 + TypeScript** for the UI
- **Tailwind CSS 4** for styling and the design system
- **Framer Motion** (LazyMotion) for scroll reveals and micro-interactions
- **next/font** to self-host Space Grotesk, Inter and JetBrains Mono at build time
- **Cloudflare Pages** for hosting, CDN and HTTPS

No backend, no database, no environment variables. `npm run build` emits static files to `out/`.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server → http://localhost:3000
npm run build    # type-check + static export → out/
npm run preview  # serve out/ as a static host → http://localhost:4173
```

## Project structure

```
├── next.config.mjs         # output: "export" (static site)
├── postcss.config.mjs      # Tailwind v4
├── public/                 # static assets (resume, favicons, og image,
│                           #   robots.txt, sitemap.xml, _headers)
└── src/
    ├── app/
    │   ├── layout.tsx      # metadata, fonts, JSON-LD
    │   └── page.tsx        # page composition
    ├── data/profile.ts     # ← ALL content lives here (edit this file)
    ├── components/         # Nav, Footer, Pipeline, Reveal, Section, Icons,
    │                       #   MotionProvider
    ├── sections/           # Hero, About, Journey, Experience, Skills,
    │                       #   PythonFocus, Projects, Credentials, Contact
    └── styles/global.css   # design tokens + custom animation
```

Interactive pieces (`Nav`, `Hero`, `Pipeline`, `Reveal`, `MotionProvider`) are client components; everything else renders on the server at build time, so the shipped HTML contains the full page text.

## Updating content

Everything shown on the site (personal info, socials, experience, skills, projects, certifications) is data in [`src/data/profile.ts`](src/data/profile.ts). Change it there; no component edits needed.

To update the resume, replace `public/Taweshal_Dev_Thakur_CV.pdf` with a new PDF of the same name.

## Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for the complete Cloudflare Pages + custom-domain guide.

Short version: framework preset **Next.js (Static HTML Export)**, build command `npm run build`, output directory **`out`**, then connect `taweshaldev.com.np` via Cloudflare nameservers.
