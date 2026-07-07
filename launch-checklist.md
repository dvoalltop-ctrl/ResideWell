# ResideWell Website — Launch Checklist

Work top to bottom. The site is ready to send when every box above "Later" is checked.

## Before publishing

- [ ] **Replace email** — swap `hello@residewell.com` for your real inbox in all three places: the Contact section link in `index.html`, the footer link in `index.html`, and the `CONTACT_EMAIL` constant in `script.js`.
- [ ] **Add Calendly link if available** — point the "Request an 8-Week Pilot" / "Request Pilot Details" buttons at your Calendly booking page instead of `#contact`. If you don't have one yet, the form is fine.
- [ ] **Add founder name if desired** — update the founder note attribution in `index.html` (search for `CUSTOMIZE`).
- [ ] **Confirm CTA destination** — decide whether every CTA scrolls to the contact form or opens Calendly, and make them consistent.
- [ ] **Confirm the reply-time commitment** — the contact form says "We reply within one business day." Honor it or soften the wording in `index.html`.
- [ ] **Update `og:url`** — set the Open Graph URL meta tag in `index.html` to your live URL after deploying.
- [ ] **Test mobile view** — open the live site on your phone; check the nav menu, pilot section, pricing cards, and form.

## Before first outreach

- [ ] **Export pilot one-pager PDF** — generate a PDF from `residewell-launch/proposal/8-week-pilot-one-pager.md` so you can attach it when someone requests pilot details.
- [ ] **Send to first 5 property managers** — start with your Week 1 CRM list (`residewell-launch/crm/target-properties-week1.csv`). Lead with the discovery call ask; include the URL as credibility, not as the pitch.

## Later (do not block launch on these)

- [ ] **Add real property case study later** — after the first pilot wraps, add a results section with real attendance and feedback numbers. No fake testimonials or logos in the meantime.
- [ ] **Add privacy policy later if collecting form submissions** — required once you switch the mailto form to Formspree / Netlify Forms / Tally / HubSpot (see README).
- [ ] **Custom domain** — point a domain (e.g. residewell.com) at your host when ready.
- [ ] **Favicon / logo file** — drop into `assets/` and reference from `index.html` (see `assets/README.md`).
