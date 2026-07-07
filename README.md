# ResideWell Website

A static, premium B2B landing page for **ResideWell** — resident wellness and amenity activation for luxury apartment communities.

This is not a SaaS app. It is a simple, fast, deployable marketing site designed to help property managers book a discovery call or request an 8-week pilot proposal.

## What this website is

- A single-page static site built with plain HTML, CSS, and lightweight JavaScript
- No backend, database, authentication, or resident/instructor portals
- Optimized for Class A multifamily property managers in Metro Atlanta and North Atlanta
- Primary goal: credibility + clear path to "Request a Pilot"

## Preview locally

Open the site in any browser:

```bash
# Option 1: Open directly
open index.html          # macOS
xdg-open index.html      # Linux

# Option 2: Simple local server (recommended)
python3 -m http.server 8080
# Then visit http://localhost:8080
```

Or use any static server (Live Server in VS Code, `npx serve`, etc.).

## Files to edit

| File | Purpose |
|------|---------|
| `index.html` | Page structure, sections, SEO meta tags |
| `styles.css` | Visual design, colors, layout |
| `script.js` | Mobile nav, form mailto, smooth scroll |
| `website-copy.md` | All website copy in one editable file |
| `launch-checklist.md` | Pre-launch tasks |

Look for `<!-- CUSTOMIZE: ... -->` comments in `index.html` and `script.js` for items that need your input before publishing.

## Update email and contact info

1. **Footer email** — `index.html` footer: `hello@residewell.com`
2. **Form recipient** — `script.js`: `CONTACT_EMAIL` variable
3. **Open Graph URL** — `index.html` `<meta property="og:url">` after you have a live domain

## Replace the contact form

The form currently uses a **mailto fallback** (opens the user's email client). For production, replace with one of:

- **[Formspree](https://formspree.io)** — Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the form; remove the mailto handler in `script.js`
- **[Netlify Forms](https://docs.netlify.com/forms/setup/)** — Add `data-netlify="true"` and a hidden `form-name` field when deploying to Netlify
- **[Tally](https://tally.so)** — Embed a Tally form in the contact section
- **[HubSpot](https://www.hubspot.com/products/marketing/forms)** — Embed a HubSpot form snippet

See comments in `index.html` and `script.js` for integration points.

## Deploy

### GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from branch** → `main` → `/ (root)`
4. Save. Site will be at `https://YOUR_USERNAME.github.io/ResideWell/`

If deploying from a subfolder, adjust asset paths or use a `docs/` folder as the Pages root.

### Netlify

1. Connect the GitHub repo at [netlify.com](https://netlify.com)
2. Build command: *(leave empty)*
3. Publish directory: `/` (root)
4. Deploy. Add a custom domain in Netlify DNS settings.

Netlify Forms work out of the box if you add the `data-netlify` attribute.

### Vercel

1. Import the repo at [vercel.com](https://vercel.com)
2. Framework preset: **Other**
3. Output directory: `/` (root)
4. Deploy. Add custom domain in project settings.

## Customize before sending to property managers

- [ ] Replace `hello@residewell.com` with your real email (footer + `script.js`)
- [ ] Add Calendly or booking link to primary CTAs if available
- [ ] Add founder name to founder note section (optional)
- [ ] Update Open Graph URL and add a social preview image
- [ ] Connect contact form to Formspree, Netlify, Tally, or HubSpot
- [ ] Confirm all CTA buttons point to the right destination
- [ ] Test on mobile, tablet, and desktop
- [ ] Review copy in `website-copy.md` for accuracy

## What not to overbuild yet

Do **not** add until you have paid pilot validation:

- User authentication or login
- Database or CMS
- Resident portal or instructor portal
- Custom backend API
- Complex JavaScript frameworks
- Fake testimonials or client logos
- Invented phone numbers or business addresses

Keep it simple. The site exists to book meetings and send proposals.

## Related assets

Business operations, sales, and proposal materials live in `residewell-launch/`.
