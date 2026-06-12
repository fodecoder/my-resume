# Andrea Foderaro — CV Site

A single-file static CV built with vanilla HTML5 and CSS3.  
No build tools. No JavaScript. No dependencies.

## File structure

```
my-resume/
├── index.html   ← the entire site
└── README.md
```

## Deploy to GitHub Pages

### Option A — GitHub UI (no terminal needed)

1. Create a new GitHub repository (e.g. `my-resume`)
2. Go to the repo → **Add file** → **Upload files**
3. Upload `index.html`
4. Go to **Settings** → **Pages**
5. Under **Source**, select **Deploy from a branch**
6. Branch: `main`, folder: `/ (root)` → **Save**
7. Your site will be live at `https://<your-username>.github.io/my-resume/`

> **Note**: the `<link rel="icon">` tag in the HTML references `/vite.svg` from the old repo — remove it or replace it once deployed.

---

### Option B — Git CLI

```bash
# 1. Clone (or initialise) your repo
git clone https://github.com/<your-username>/my-resume.git
cd my-resume

# 2. Copy the index.html into the repo
cp /path/to/index.html .

# 3. Commit and push
git add index.html README.md
git commit -m "chore: replace React SPA with static HTML/CSS CV"
git push origin main

# 4. Enable Pages in GitHub Settings → Pages → Deploy from branch → main / root
```

Your site will be live at:
```
https://<your-username>.github.io/my-resume/
```

---

## Before going live — checklist

- [ ] Replace `https://www.linkedin.com/in/andrea-foderaro` with your actual LinkedIn URL
- [ ] Confirm `github.com/fodecoder` is the right GitHub handle
- [ ] Add an `og:image` meta tag (a 1200×630 screenshot or avatar) for social sharing
- [ ] Remove the PDF from the repo (it contains your phone number — scraping risk)
- [ ] Update the footer year if needed

## Customisation

All design tokens are CSS custom properties in `:root` at the top of `<style>`.  
Change colours, fonts, or spacing there — everything else derives from them.

Dark mode is automatic via `prefers-color-scheme: dark`.  
Print layout is handled via `@media print` — test with Ctrl+P before sharing.
