# Deploying taweshaldev.com.np to Cloudflare

This portfolio is a **fully static site** (React + Vite). No server, no database, no environment variables. It deploys to **Cloudflare Pages** for free.

**Key settings (you'll need these in step 6):**

| Setting | Value |
|---|---|
| Framework preset | Vite (or None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 or newer |
| Environment variables | **None required** |

---

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:5173

## 3. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## 4. Test the production build

```bash
npm run preview
```

Open http://localhost:4173 and click through every section, the resume download, and the social links.

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/taweshaldev99/portfolio.git
git push -u origin main
```

(Create the empty `portfolio` repository on GitHub first — no README, no .gitignore.)

> The two original CV PDFs in the project root are committed too. That's fine — only `public/` and the build output are served. If you prefer to keep them private, add their filenames to `.gitignore` before the first commit.

## 6. Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com and sign up / log in (free plan is enough).
2. In the left sidebar: **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Authorize GitHub and select the `portfolio` repository.
4. Configure the build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

After ~1 minute you'll get a URL like `portfolio-xyz.pages.dev`. Open it and verify everything works.

Every future `git push` to `main` redeploys automatically.

**Alternative (no GitHub):** deploy straight from your machine:

```bash
npx wrangler pages deploy dist --project-name=portfolio
```

## 7. Put your domain on Cloudflare (nameservers)

Your `.com.np` domain is managed at **register.com.np** (Mercantile). Cloudflare needs to control its DNS:

1. In the Cloudflare dashboard: **Add a site** → enter `taweshaldev.com.np` → choose the **Free** plan.
2. Cloudflare shows you **two nameservers**, e.g. `ada.ns.cloudflare.com` and `bob.ns.cloudflare.com` (yours will differ).
3. Log in to https://register.com.np, open your domain, and **replace the existing nameservers** with the two Cloudflare ones.
4. Wait for propagation. `.com.np` nameserver changes are applied by the registry and can take from a few hours up to a day or two. Cloudflare emails you when the site becomes **Active**.

> Yes — use Cloudflare nameservers. It's the simplest path and gives you free SSL, CDN and redirects. You are not buying any hosting.

## 8. Connect the domain to the Pages project

Once the site shows **Active** in Cloudflare:

1. Open your Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `taweshaldev.com.np` → **Continue** → **Activate domain**.
   Cloudflare creates the DNS record for you automatically.
3. Repeat for `www.taweshaldev.com.np` (recommended, see step 9).

The resulting DNS records (created automatically — you don't type these by hand):

| Type | Name | Target | Proxy |
|---|---|---|---|
| CNAME | `taweshaldev.com.np` | `<project>.pages.dev` | Proxied (orange cloud) |
| CNAME | `www` | `<project>.pages.dev` | Proxied (orange cloud) |

## 9. Redirect www → root (canonical domain)

The canonical URL is **https://taweshaldev.com.np** (that's what the site's metadata, sitemap and canonical tag use). Redirect `www` to it so search engines see one site:

1. Add `www.taweshaldev.com.np` as a custom domain on the Pages project (step 8) — this gives `www` a certificate.
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
- [ ] Share the URL in WhatsApp/LinkedIn — the preview card shows your name + OG image
- [ ] Run a Lighthouse audit in Chrome DevTools (aim: 90+ across the board)

### Afterwards (optional but worth doing)

- Submit `https://taweshaldev.com.np/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) to get indexed faster.
- Analytics: if you want visitor numbers, enable **Cloudflare Web Analytics** (privacy-friendly, free, no cookies) — dashboard → Analytics → Web Analytics → add the site. The site works fine without it.

### Updating content later

All text — name, links, jobs, skills, projects — lives in **`src/data/profile.ts`**. Edit that file, commit, push. Cloudflare redeploys automatically. To swap the resume, replace `public/Taweshal_Dev_Thakur_CV.pdf` (keep the same filename).
