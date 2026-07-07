# Assets

Static assets for the ResideWell website live here (logo, favicon, Open Graph image, any photos).

The site currently ships with **no image dependencies** — the design uses typography, color, and subtle CSS shapes instead of stock photos. Keep it that way until you have real assets worth showing.

## When you add files

| Asset | Suggested name | How to wire it up |
| ----- | -------------- | ----------------- |
| Favicon | `favicon.png` (or `.ico`) | Add `<link rel="icon" href="assets/favicon.png">` to the `<head>` of `index.html` |
| Logo | `logo.svg` | Replace the text logo in the nav/footer of `index.html` with an `<img>` |
| Social share image | `og-image.png` (1200×630) | Add `<meta property="og:image" content="https://your-domain.com/assets/og-image.png">` to `index.html` |
| Real property/class photos | `photos/…` | Only add photos you have rights to — no stock-photo filler |

Keep files small (compress images; prefer SVG for the logo) so the page stays fast.
