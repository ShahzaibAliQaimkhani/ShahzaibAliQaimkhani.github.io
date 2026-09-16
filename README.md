# Portfolio — Shahzaib Ali

A single-page static site. No build step, no npm, no framework. Push it and it works.

```
index.html
style.css
script.js
assets/
  favicon.svg
  README.md          notes on what images to drop here
```

## Deploy to GitHub Pages

1. Create a repository named `ShahzaibAliQaimkhani.github.io` on GitHub.
   The name has to match your username exactly — that's what makes it a user site
   rather than a project site, and it gets you the short URL.

2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/ShahzaibAliQaimkhani/ShahzaibAliQaimkhani.github.io.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**. Set Source to
   *Deploy from a branch*, branch `main`, folder `/ (root)`. Save.

4. Wait two or three minutes. The site appears at
   `https://shahzaibaliqaimkhani.github.io/`.

If you'd rather use a project repo (e.g. `portfolio`), everything is the same except
the URL becomes `https://shahzaibaliqaimkhani.github.io/portfolio/` — and because all
paths here are relative, nothing breaks.

## Before you share the link

These are marked `TODO` in the HTML. Search for `TODO` to find them all.

- **`assets/lrp-relevance.png`** — the LRP modality-contribution figure. The page has a
  visible empty slot until you add it. This is the single highest-value addition; a
  real plot is what separates a claim from evidence. Once the file is there, replace
  the placeholder `<div class="shot-slot">` with
  `<img src="assets/lrp-relevance.png" alt="...">` and remove `is-empty` from the
  `<figure>` class.
- **Repository links** — every project currently points at your GitHub profile.
  Point them at real repos. If the gait data is under lab restrictions, say so on the
  page and link a PDF write-up instead. A link that 404s is worse than no link.
- **`assets/Shahzaib_Ali_CV.pdf`** — linked from the contact section.
- **`assets/og-preview.png`** — 1200×630. This is what shows when you paste the link
  into an email or a LinkedIn message. Worth twenty minutes.
- **`og:url`** in `index.html` — set it to your real URL.

## Notes

- Dark mode follows the system setting and can be overridden with the toggle; the
  choice is stored in `localStorage`.
- The hero curve draws once on load and is skipped entirely under
  `prefers-reduced-motion`.
- Fonts come from Google Fonts with a system fallback stack, so the page still reads
  correctly if they fail to load.
- Everything is relative-path, so the site works from a subdirectory or from
  `file://` without a server.
