# ResideWell — Website

The public landing page for **ResideWell**, a B2B resident experience and amenity activation company for luxury apartment communities. The site's single job: look credible enough for a property manager to book a 15-minute call or request an 8-week pilot proposal.

It is a **static site** — plain HTML, CSS, and a small amount of JavaScript. No build step, no framework, no backend, no database. Keep it that way until sales validation says otherwise.

> Sales, operations, and pilot-delivery materials live in [`residewell-launch/`](residewell-launch/). This README covers only the website.

---

## 1. What this website is

| File | Purpose |
| ---- | ------- |
| `index.html` | The entire landing page (all sections) |
| `styles.css` | All styling — palette lives in CSS variables at the top |
| `script.js` | Mobile nav, contact-form mailto handler, footer year |
| `website-copy.md` | Every line of site copy in one editable Markdown file |
| `launch-checklist.md` | Pre-launch checklist |
| `assets/` | Images/logo/favicon when you add them (see `assets/README.md`) |

## 2. Preview locally

No build step needed. Either:

- **Simplest:** double-click `index.html` to open it in your browser.
- **Better (mirrors a real server):**

  ```bash
  # from the repo root — requires Python (preinstalled on macOS)
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

The page reloads on refresh; there is no hot reload.

## 3. What files to edit

- **Change wording** → edit `index.html` directly (sections are labeled with comments), and keep `website-copy.md` in sync so you always have a clean text reference for emails and PDFs.
- **Change colors/spacing/fonts** → edit the `:root` variables at the top of `styles.css`.
- **Change form behavior** → edit `script.js`.

Search `index.html` and `script.js` for `CUSTOMIZE` comments — each marks a spot that needs your real information.

## 4. Where to update email / contact info

The placeholder email `hello@residewell.com` appears in **three places**:

1. `index.html` — the "Prefer email?" link in the Contact section
2. `index.html` — the footer email link
3. `script.js` — the `CONTACT_EMAIL` constant at the top (this is where form submissions are addressed)

Replace all three with your real inbox before sharing the URL.

## 5. Deploying

Any static host works. Pick one:

**GitHub Pages (free, easiest since the repo is already on GitHub)**

1. Push to `main`.
2. Repo → Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)`.
3. Site goes live at `https://<username>.github.io/ResideWell/` within a minute or two.

**Netlify**

1. [app.netlify.com](https://app.netlify.com) → *Add new site* → *Import an existing project* → pick this repo.
2. Leave build command empty, publish directory `/`.
3. Optional: upgrade the form later with [Netlify Forms](https://docs.netlify.com/forms/setup/) (see below).

**Vercel**

1. [vercel.com/new](https://vercel.com/new) → import this repo.
2. Framework preset: *Other*. No build command, output directory `/`.

After deploying, update the `og:url` meta tag in `index.html` with your live URL.

## 6. The contact form (and how to upgrade it)

There is **no backend**, so the form uses a `mailto:` fallback: submitting opens the visitor's email client with a pre-filled message addressed to `CONTACT_EMAIL`. That's fine for the first few weeks, but a hosted form converts better. Options, easiest first:

- **Formspree** — create a form at [formspree.io](https://formspree.io), then in `index.html` set `<form action="https://formspree.io/f/YOUR_ID" method="POST">` and delete the submit handler in `script.js`. Done.
- **Netlify Forms** — if hosting on Netlify, add `data-netlify="true"` and `name="pilot-inquiry"` to the `<form>` tag and delete the submit handler in `script.js`. Submissions appear in the Netlify dashboard.
- **Tally** — build the form at [tally.so](https://tally.so) and either link to it from the CTA button or embed it in place of the current form markup.
- **HubSpot** — if/when you adopt HubSpot CRM, replace the form with a HubSpot embed so inquiries create contacts automatically.

If you start collecting submissions on a hosted form, add a short privacy policy page.

## 7. What to customize before sending to property managers

Work through [`launch-checklist.md`](launch-checklist.md). The short version:

1. Replace `hello@residewell.com` in all three places (see section 4).
2. Add your Calendly link to the CTA buttons if you have one (otherwise the form is the CTA — that's fine).
3. Optionally add your name to the founder note in `index.html`.
4. Update `og:url` with your live URL.
5. Test on your phone.

## 8. What NOT to overbuild yet

The first goal is one paid 8-week pilot. Until that closes, do **not** add:

- A resident portal or instructor portal
- Authentication or accounts of any kind
- A database or custom backend
- A blog or CMS
- A framework (React/Next/etc.) — plain HTML is faster to edit and deploy
- Online payments
- Fake testimonials, client logos, or case studies — add real ones as they happen

If a change doesn't help book meetings or send proposals, skip it.
