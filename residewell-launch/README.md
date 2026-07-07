# ResideWell Launch Operating System

**Working name:** ResideWell  
**What it is:** A simple founder operating system for sales, outreach, instructor recruiting, and pilot delivery — not a SaaS product.

**Your goal this week:** Execute toward your first paid 8-week pilot ($4,000).

---

## What Each Folder Is For

| Folder | Purpose |
|--------|---------|
| **`/crm`** | Your property pipeline — CSV template, example rows, field definitions, research scorecard |
| **`/sales`** | Outreach emails, LinkedIn messages, call scripts, discovery scripts, objections, follow-ups |
| **`/proposal`** | 8-week pilot one-pager, annual pricing, customizable proposal template |
| **`/website`** | Landing page copy + static HTML you can open in any browser |
| **`/instructors`** | Recruiting form, outreach messages, screening scorecard, standards |
| **`/operations`** | Weekly dashboard, founder schedule, onboarding/walkthrough/launch checklists, attendance tracker |
| **`/ai-workflows`** | Copy-paste AI prompts for research, personalization, proposals, and reporting |

---

## What to Complete First (Day 1 — ~2 hours)

Do these in order before anything else:

1. **Pick your name** — ResideWell is your working name. Use it everywhere consistently.
2. **Open `crm/target-properties-template.csv`** in Google Sheets. Save a copy as `target-properties.csv`.
3. **Research 10 properties** using `crm/property-research-scorecard.md`. Add rows to your CRM. Do not invent contacts — use `[VERIFY]` until you have real names from LinkedIn.
4. **Personalize `website/simple-index.html`** — replace `[Your Name]`, phone, and email. Open it locally in Chrome to preview.
5. **Set up weekly tracker** — copy `operations/weekly-execution-dashboard.md` into a Google Sheet tab.

---

## What to Use This Week (Your 10 Tasks)

| # | Task | File(s) to Use |
|---|------|----------------|
| 1 | Confirm ResideWell as working name | This README + all materials (already done) |
| 2 | Create CRM for 50 properties | `crm/target-properties-template.csv` |
| 3 | Research workflow for 9 submarkets | `crm/property-research-scorecard.md` + `ai-workflows/lead-research-prompts.md` |
| 4 | 2 contacts per property | `crm/crm-field-definitions.md` — LinkedIn research |
| 5 | 8-week pilot offer | `proposal/8-week-pilot-one-pager.md` → export to PDF |
| 6 | Landing page | `website/simple-index.html` + `website/landing-page-copy.md` |
| 7 | Instructor recruiting form | `instructors/instructor-recruiting-form-questions.md` → Google Form |
| 8 | Outreach 20 instructors | `instructors/instructor-outreach-messages.md` |
| 9 | Property outreach | `sales/property-outreach-email-sequence.md` + `sales/linkedin-outreach-sequence.md` |
| 10 | Weekly execution tracker | `operations/weekly-execution-dashboard.md` + `operations/founder-weekly-schedule.md` |

---

## What NOT to Overbuild

| Don't | Do Instead |
|-------|------------|
| Build a custom CRM app | Google Sheets + CSV template |
| Perfect the logo and brand | Use ResideWell text logo on HTML page |
| Research all 50 properties before outreach | Research 10, outreach 15, research 10 more |
| Recruit 50 instructors before a signed pilot | Recruit 5–10 strong backups; scale after verbal yes |
| Write a 20-page business plan | Use the one-pager and discovery calls |
| Automate email sequences | Copy-paste personalized emails from templates |
| Negotiate annual contracts first | Sell the $4,000 pilot — annual comes after proof |

---

## Fastest Path to Your First Paid Pilot

```
Research 10 High-fit properties (CRM)
        ↓
Send 15 personalized emails + 10 LinkedIn touches
        ↓
5 phone calls to non-responders
        ↓
3 replies → 2 discovery calls booked
        ↓
2 discovery calls → 1 proposal sent (within 24 hr)
        ↓
Follow up 3x over 14 days
        ↓
Verbal yes → agreement + 50% deposit
        ↓
Onboard (client-onboarding-checklist.md)
        ↓
PAID PILOT LAUNCHES
```

**Timeline drivers:**
- Speed of outreach (start day 2, not day 7)
- Follow-up discipline (most deals die in follow-up, not first email)
- Pilot framing ($4,000 de-risks the decision)
- One specific amenity observation per email (proves you're not spamming)

---

## Daily Rhythm (Full-Time Job)

See `operations/founder-weekly-schedule.md` for the full plan. Summary:

- **Morning (30–45 min):** Research + outreach before your day job
- **Evening Tue–Thu (30 min):** Discovery calls and follow-ups
- **Saturday (2 hr):** Batch research or proposal work
- **Friday PM (15 min):** Update weekly dashboard

**~10–12 hours/week.** Enough to get to pilot if you protect the time.

---

## Key Numbers to Remember

| Item | Value |
|------|-------|
| Recommended pilot | **$4,000** / 8 weeks / 2 classes per week |
| Lean pilot | $3,500 |
| Premium pilot | $5,000 |
| Annual Standard | $1,800/month |
| CRM target | 50 properties |
| Week 1 outreach target | 15 emails, 10 LinkedIn, 5 calls |
| Instructor recruiting | 20 outreach messages → 5+ applicants |

---

## How to Open the Landing Page

1. Open `website/simple-index.html` in Chrome, Safari, or Firefox (double-click or File → Open).
2. `styles.css` must stay in the same folder.
3. Replace placeholder contact info before sharing with prospects.
4. Optional: deploy to Netlify, Vercel, or GitHub Pages later — not required for week one.

---

## Exporting the Pilot One-Pager

1. Open `proposal/8-week-pilot-one-pager.md` in Google Docs or Notion.
2. Replace `[Your Name]` and contact details.
3. Export as PDF: `ResideWell-8-Week-Pilot.pdf`
4. Attach to Email 4 and discovery follow-ups.

---

## Data Integrity Rules

- **Never invent property contacts.** Use LinkedIn and verified sources.
- Example rows in `target-properties-example.csv` are clearly marked **PLACEHOLDER**.
- AI research prompts label assumptions — you verify before CRM entry.
- Separate verified data from guesses in CRM Notes.

---

## When You Get Your First Verbal Yes

1. `operations/client-onboarding-checklist.md`
2. `operations/property-walkthrough-checklist.md`
3. `operations/pilot-launch-checklist.md`
4. `instructors/instructor-standards.md` — share with assigned instructors
5. `operations/class-attendance-tracker.csv` — log every class

---

## Questions This System Doesn't Answer Yet

You'll need to add later (don't block week one):

- Legal entity name and EIN
- Contractor agreement template for instructors
- General liability insurance policy
- Pilot agreement / contract (consult a lawyer — use proposal as scope attachment)
- Payment processing (Stripe, invoice, or check)

**Get those in motion after your first discovery call, not before your first email.**

---

## File Index

```
residewell-launch/
├── README.md
├── crm/
│   ├── target-properties-template.csv
│   ├── target-properties-example.csv
│   ├── crm-field-definitions.md
│   └── property-research-scorecard.md
├── sales/
│   ├── property-outreach-email-sequence.md
│   ├── linkedin-outreach-sequence.md
│   ├── discovery-call-script.md
│   ├── phone-call-script.md
│   ├── objection-handling.md
│   └── follow-up-sequence.md
├── proposal/
│   ├── 8-week-pilot-one-pager.md
│   ├── annual-pricing-ladder.md
│   └── proposal-template.md
├── website/
│   ├── landing-page-copy.md
│   ├── simple-index.html
│   └── styles.css
├── instructors/
│   ├── instructor-recruiting-form-questions.md
│   ├── instructor-outreach-messages.md
│   ├── instructor-screening-scorecard.md
│   └── instructor-standards.md
├── operations/
│   ├── weekly-execution-dashboard.md
│   ├── founder-weekly-schedule.md
│   ├── client-onboarding-checklist.md
│   ├── property-walkthrough-checklist.md
│   ├── pilot-launch-checklist.md
│   ├── class-attendance-tracker.csv
│   └── resident-feedback-form-questions.md
└── ai-workflows/
    ├── lead-research-prompts.md
    ├── property-personalization-prompts.md
    ├── proposal-customization-prompts.md
    └── monthly-reporting-prompts.md
```

---

**ResideWell** — Resident wellness programming for luxury apartment communities. Atlanta metro.

*Execute this week. Refine next week. First paid pilot is the only metric that matters right now.*
