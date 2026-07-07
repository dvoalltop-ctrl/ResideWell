# ResideWell Static Website

ResideWell is a premium B2B landing page for resident wellness programming and
amenity activation in luxury apartment communities. The site is intentionally
simple: static HTML, CSS, and lightweight JavaScript only.

## Preview locally

From the repository root, run one of these commands:

- `python3 -m http.server 8000`
- `npx serve .`

Then open `http://localhost:8000` in your browser.

You can also open `index.html` directly, but a local server better matches how
the site will behave after deployment.

## Files to edit

- `index.html` - page structure, sections, SEO tags, and visible copy
- `styles.css` - colors, spacing, layout, responsive styles, and buttons
- `script.js` - static contact form mailto fallback
- `website-copy.md` - all final website copy in one easy-to-edit file
- `launch-checklist.md` - pre-publish checklist
- `assets/README.md` - where future brand images, PDFs, and icons should live

## Contact and email updates

Replace `hello@residewell.com` in these places before publishing:

- Footer email in `index.html`
- Mailto fallback in `script.js`
- Any deployment platform form settings if you replace the static fallback

The current contact form does not submit to a backend. It opens an email draft
using `mailto:`. When ready, replace it with one of these:

- Formspree
- Netlify Forms
- Tally
- HubSpot

## Deploy

### GitHub Pages

1. Push this repository to GitHub.
2. Go to repository settings.
3. Open Pages.
4. Select the `main` branch and repository root.
5. Save and wait for the Pages URL.

### Netlify

1. Create a new Netlify site from Git.
2. Select this repository.
3. Leave build command blank.
4. Set publish directory to `.`.
5. Deploy.

### Vercel

1. Import the repository into Vercel.
2. Use the default static project settings.
3. Leave build command blank.
4. Set output directory to `.` if prompted.
5. Deploy.

## Customize before sending to property managers

- Replace the placeholder email address.
- Add a Calendly or scheduling link if available.
- Confirm whether CTAs should go to email, Calendly, Tally, HubSpot, or a PDF.
- Add the founder name only if you want it public.
- Replace the Open Graph image placeholder after creating a branded preview image.
- Export and link the 8-week pilot one-pager PDF if available.
- Add a real case study only after you have one.
- Add privacy policy language before collecting form submissions through a third-party tool.
- Test the page on mobile, tablet, and desktop.

## What not to overbuild yet

Do not add authentication, a database, a resident portal, an instructor portal,
or a SaaS dashboard before sales validation. The priority is booking discovery
calls, sending pilot proposals, and closing the first paid 8-week pilot.
