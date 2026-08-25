# taweshaldev.com.np — Personal Portfolio

Portfolio website of **Taweshal Dev Thakur** — Python Developer & Data Engineering Enthusiast, Kathmandu, Nepal.

Live: **https://taweshaldev.com.np**

## Stack

- **React 19 + TypeScript** — UI
- **Vite 7** — build tool (static output)
- **Tailwind CSS 4** — styling / design system
- **Framer Motion** (LazyMotion) — scroll reveals & micro-interactions
- **Cloudflare Pages** — hosting, CDN, HTTPS

No backend, no database, no environment variables. Pure static.

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server → http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # serve the production build locally
```

## Project structure

```
├── index.html              # SEO metadata, fonts, JSON-LD
├── public/                 # static assets (resume, favicons, og image,
│                           #   robots.txt, sitemap.xml, _headers)
└── src/
    ├── data/profile.ts     # ← ALL content lives here (edit this file)
    ├── components/         # Nav, Footer, Pipeline, Reveal, Section, Icons
    ├── sections/           # Hero, About, Journey, Experience, Skills,
    │                       #   PythonFocus, Projects, Credentials, Contact
    └── styles/global.css   # design tokens + custom animation
```

## Updating content

Everything shown on the site — personal info, socials, experience, skills, projects, certifications — is data in [`src/data/profile.ts`](src/data/profile.ts). Change it there; no component edits needed.

To update the resume, replace `public/Taweshal_Dev_Thakur_CV.pdf` with a new PDF of the same name.

## Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for the complete Cloudflare Pages + custom-domain guide.

Short version: build command `npm run build`, output directory `dist`, then connect `taweshaldev.com.np` via Cloudflare nameservers.
