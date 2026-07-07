# Assets

Place optional static assets here:

- **Logo files** — SVG or PNG logo if you replace the text logo
- **Favicon** — `favicon.ico` or `favicon.svg` (add `<link rel="icon">` in `index.html`)
- **Open Graph image** — Social preview image (recommended: 1200×630px)
- **Pilot one-pager PDF** — Link from CTAs if you want a downloadable overview

The current site uses no stock photos or image dependencies. Typography, color, and layout carry the design.

## Adding a favicon

1. Add `favicon.svg` or `favicon.ico` to this folder
2. In `index.html` `<head>`, add:

```html
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml" />
```

## Adding an OG image

1. Add `og-image.png` (1200×630) to this folder
2. In `index.html` `<head>`, add:

```html
<meta property="og:image" content="https://YOUR_DOMAIN/assets/og-image.png" />
```
