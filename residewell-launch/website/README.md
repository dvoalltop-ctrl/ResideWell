# Website — Live Preview

> **Goal:** One clean page for prospects who ask for your URL. Update once — then sell.

---

## Open in Live Preview

1. Open `website/simple-index.html` in Cursor.
2. Right-click → **Show Preview** (Live Preview extension).
3. `styles.css` must stay in the same folder. Preview reloads when you save.

---

## Status — customized for David Vo

Done already:

- Founder name: **David Vo** (founder note + contact section)
- Email: `dvo.alltop@gmail.com` (working today)
- All 4 call-to-action buttons point to Calendly

Two TODOs remain (search `TODO` in `simple-index.html`):

| TODO                                                                           | When                               | Guide                                      |
| ------------------------------------------------------------------------------ | ---------------------------------- | ------------------------------------------ |
| Replace `calendly.com/residewell/15min` with your real Calendly link (4 spots) | After creating your Calendly event | `../operations/founder-setup-guide.md` § 2 |
| Swap `dvo.alltop@gmail.com` → `david@residewell.com` (2 spots)                 | After Google Workspace is live     | `../operations/founder-setup-guide.md` § 1 |

Also add your phone number: search `[Your Phone]` (1 spot).

**Do not** spend more than 30 minutes on the website in week 1. Discovery calls come from email and LinkedIn.

---

## Files

| File                   | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `simple-index.html`    | **Primary landing page** — use for Live Preview                       |
| `styles.css`           | Styles (linked, not inlined)                                          |
| `index.html`           | Redirects to `simple-index.html` (kept so servers auto-open the site) |
| `landing-page-copy.md` | Text-only reference for emails and PDFs                               |

---

## Share with prospects

- **Week 1:** Paste the landing page URL only if they ask. Lead with discovery-call booking.
- **Later:** Deploy `simple-index.html` + `styles.css` + `index.html` to Netlify or GitHub Pages (optional, free).
