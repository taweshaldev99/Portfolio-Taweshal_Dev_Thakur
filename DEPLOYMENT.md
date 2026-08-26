# Deploying taweshaldev.com.np to Cloudflare

This portfolio is **Next.js 15 with static export** (`output: "export"`). `next build` writes plain HTML/CSS/JS to the `out/` folder, so there is no Node server, no database and no environment variables. It deploys to **Cloudflare Pages** for free.

**Settings you need in the Cloudflare dashboard:**

| Setting | Value |
|---|---|
| Framework preset | **Next.js (Static HTML Export)** |
| Build command | `npm run build` |
| Build output directory | **`out`** |
| Node version | 20 or newer |
| Environment variables | **None required** |

> ### Already have a failed deployment?
> If your build failed with **`Couldn't find any 'pages' or 'app' directory'`**, Cloudflare is building an old commit from before this Next.js setup existed. Fix it in two steps:
>
> 1. **Settings** → **Build configuration** → **Edit**: build command `npm run build`, build output directory **`out`** (not `dist`). Save.
> 2. **Deployments** → **Create deployment** → branch `main`.
>
> **Do not use "Retry deployment".** Retry replays the exact commit that failed, so it rebuilds the old code and fails again no matter what you pushed. Only "Create deployment" (or a fresh `git push`) picks up the latest commit.

---

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 3. Build for production

```bash
npm run build
```

Output goes to the `out/` folder as static files.

## 4. Test the production build

```bash
npm run preview
```

Open http://localhost:4173 and click through every section, the resume download, and the social links. This serves `out/` as a plain static host, exactly what Cloudflare does.

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/taweshaldev99/portfolio.git
git push -u origin main
```

(Create the empty `portfolio` repository on GitHub first, with no README and no .gitignore.)

> The two original CV PDFs in the project root are committed too. That's fine, because only `public/` and the build output are served. If you prefer to keep them private, add their filenames to `.gitignore` before the first commit.

## 6. Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com and sign up / log in (free plan is enough).
2. In the left sidebar: **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Authorize GitHub and select the `portfolio` repository.
4. Configure the build:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Click **Save and Deploy**.

After a minute or two you'll get a URL like `portfolio-xyz.pages.dev`. Open it and verify everything works.

Every future `git push` to `main` redeploys automatically.

**Alternative (no GitHub):** deploy straight from your machine:

```bash
npm run build
npx wrangler pages deploy out --project-name=portfolio
```

## 7. Put your domain on Cloudflare (nameservers)

Your `.com.np` domain is managed at **register.com.np** (Mercantile). Cloudflare needs to control its DNS:

1. In the Cloudflare dashboard: **Add a site** → enter `taweshaldev.com.np` → choose the **Free** plan.
2. Cloudflare shows you **two nameservers**, e.g. `ada.ns.cloudflare.com` and `bob.ns.cloudflare.com` (yours will differ).
3. Log in to https://register.com.np, open your domain, and **replace the existing nameservers** with the two Cloudflare ones.
4. Wait for propagation. `.com.np` nameserver changes are applied by the registry and can take from a few hours up to a day or two. Cloudflare emails you when the site becomes **Active**.

> Yes, use Cloudflare nameservers. It's the simplest path and gives you free SSL, CDN and redirects. You are not buying any hosting.

## 8. Connect the domain to the Pages project

Once the site shows **Active** in Cloudflare:

1. Open your Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `taweshaldev.com.np` → **Continue** → **Activate domain**.
   Cloudflare creates the DNS record for you automatically.
3. Repeat for `www.taweshaldev.com.np` (recommended, see step 9).

The resulting DNS records (created automatically, so you don't type these by hand):

| Type | Name | Target | Proxy |
|---|---|---|---|
| CNAME | `taweshaldev.com.np` | `<project>.pages.dev` | Proxied (orange cloud) |
| CNAME | `www` | `<project>.pages.dev` | Proxied (orange cloud) |

## 9. Redirect www → root (canonical domain)

The canonical URL is **https://taweshaldev.com.np** (that's what the site's metadata, sitemap and canonical tag use). Redirect `www` to it so search engines see one site:

1. Add `www.taweshaldev.com.np` as a custom domain on the Pages project (step 8). This gives `www` a certificate.
2. In the Cloudflare dashboard for the domain: **Rules** → **Redirect Rules** → **Create rule**:
   - **When incoming requests match:** Custom filter → Field `Hostname` equals `www.taweshaldev.com.np`
   - **Then:** Dynamic redirect → expression: `concat("https://taweshaldev.com.np", http.request.uri.path)`
   - **Status code:** 301
3. Save and deploy the rule.

## 10. HTTPS

Nothing to install. Cloudflare issues a free **Universal SSL** certificate automatically once the domain is active.

Recommended settings under **SSL/TLS**:
- Encryption mode: **Full** (Pages supports it natively)
- **Always Use HTTPS**: On (SSL/TLS → Edge Certificates)

## 11. Final verification checklist

- [ ] `https://taweshaldev.com.np` loads with a padlock (valid certificate)
- [ ] `https://www.taweshaldev.com.np` 301-redirects to the root domain
- [ ] `http://taweshaldev.com.np` upgrades to HTTPS
- [ ] Resume downloads: `https://taweshaldev.com.np/Taweshal_Dev_Thakur_CV.pdf`
- [ ] `https://taweshaldev.com.np/robots.txt` and `/sitemap.xml` load
- [ ] Share the URL in WhatsApp/LinkedIn and check the preview card shows your name and OG image
- [ ] Run a Lighthouse audit in Chrome DevTools (aim: 90+ across the board)

### Afterwards (optional but worth doing)

- Submit `https://taweshaldev.com.np/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) to get indexed faster.
- Analytics: if you want visitor numbers, enable **Cloudflare Web Analytics** (privacy-friendly, free, no cookies) via dashboard → Analytics → Web Analytics → add the site. The site works fine without it.

### Updating content later

All text (name, links, jobs, skills, projects) lives in **`src/data/profile.ts`**. Edit that file, commit, push. Cloudflare redeploys automatically. To swap the resume, replace `public/Taweshal_Dev_Thakur_CV.pdf` (keep the same filename).

### Troubleshooting

| Error in the Cloudflare build log | Cause and fix |
|---|---|
| `Couldn't find any 'pages' or 'app' directory` | Cloudflare built an old commit without `src/app/`. Use **Deployments** → **Create deployment** on `main`, not **Retry deployment**, which replays the old commit. |
| `next export has been removed` | Remove any `next export` from the build command. `output: "export"` in `next.config.mjs` already does it, so the build command must be exactly `npm run build`. |
| `next@16.x ... not found and will be installed` | The build command is `npx next build`, which downloads whatever Next is newest instead of the version pinned in `package.json`. Change the build command to `npm run build`. |
| Deploy succeeds but the site is blank / 404 | Output directory is wrong. It must be **`out`**, not `dist` or `.next`. |
| Fonts look wrong | `next/font` downloads Space Grotesk, Inter and JetBrains Mono at build time and self-hosts them. If the build machine had no network, retry the deployment. |
