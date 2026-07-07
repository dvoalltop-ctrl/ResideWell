# CRM Field Definitions

> Built for **50 target properties**. Read `week-1-crm-setup.md` first. Research and scoring rules: `property-research-scorecard.md`.

---

## Status values (use only these)

| Status               | Meaning                             | Next action                |
| -------------------- | ----------------------------------- | -------------------------- |
| **Not Contacted**    | Researched, no verified contact yet | Find contact on LinkedIn   |
| **Contact Found**    | Verified contact, ready for Email 1 | Send Email 1 today         |
| **Outreach Sent**    | Email 1, LinkedIn, or call made     | Next Follow-Up +4 days     |
| **Replied**          | Any response                        | Book discovery within 4 hr |
| **Discovery Booked** | 15-min call on calendar             | Prep + run call            |
| **Discovery Done**   | Call complete                       | One-pager PDF within 2 hr  |
| **Proposal Sent**    | Proposal delivered                  | Follow up day 3, 7, 14     |
| **Pilot Won**        | Deposit received                    | Onboarding checklists      |
| **Lost**             | Declined                            | Stop outreach              |
| **Nurture**          | Not now                             | Follow up in 60–90 days    |

**Pipeline math:** the week succeeds when `Discovery Booked` ≥ 2.

---

## Required before Email 1

| Field                 | Rule                                                       |
| --------------------- | ---------------------------------------------------------- |
| Property Manager Name | Real name — never "Leasing Team"                           |
| Contact Verified      | **Yes** only with verified email or active LinkedIn thread |
| Outreach Angle        | One specific observation — mandatory for Email 1           |
| Fit Score             | 1–5 (see scorecard) — contact 5s first, then 4s            |

---

## Field reference

### Property identity

| Field                         | Enter                         | Unknown?                 |
| ----------------------------- | ----------------------------- | ------------------------ |
| Property Name                 | Official marketing name       | Never — required         |
| City / Neighborhood/Submarket | Target submarket              | Required                 |
| Address / Website             | Verify on Google Maps         | "Unknown" OK for address |
| Unit Count                    | From website or listing sites | "Unknown" if unlisted    |
| Property Class                | Class A, A-, B+               | Estimate OK, note it     |

### Contacts & management

| Field                                    | Enter                          | Rule                                        |
| ---------------------------------------- | ------------------------------ | ------------------------------------------- |
| Management Company                       | From website footer / listings | "Unknown" if unclear                        |
| Ownership Company                        | If publicly stated             | Usually "Unknown" — fine                    |
| Property Manager Name / Email / LinkedIn | Verified only                  | **Never invent. "Unknown" until verified.** |
| Regional Manager Name / Email / LinkedIn | Verified only                  | Escalation path if PM silent                |

### Research & scoring

| Field                         | Enter                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| Amenities                     | Semicolon list + Yes/No flags (Fitness, Yoga/Studio, Rooftop, Courtyard, Pool, Lounge) |
| Current Events Seen           | Publicly visible resident events                                                       |
| Google Rating / Review Themes | Rating + 2–3 recurring themes                                                          |
| Likely Pain Point             | One-sentence buying hypothesis                                                         |
| **Outreach Angle**            | One specific observation, pasted into Email 1                                          |
| **Fit Score**                 | 1–5 per `property-research-scorecard.md`                                               |
| **Contact Verified**          | Yes / No — **No = do not email**                                                       |

### Pipeline & deal

| Field                                                         | Values                                                                                                                                                          |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Priority Level                                                | High (Fit 5) / Medium (Fit 4) / Low (Fit 3). A/B/C equivalent: A = high fit + portfolio potential, B = good fit missing proof points, C = low fit or low budget |
| Last Contact Date / Next Follow-Up Date / Discovery Call Date | YYYY-MM-DD — Next Follow-Up never blank on active leads                                                                                                         |
| Notes                                                         | Email history, call quotes, objections                                                                                                                          |
| Proposed Offer                                                | 8-Week Pilot (default)                                                                                                                                          |
| Proposal Sent                                                 | Yes / No                                                                                                                                                        |
| Deal Value                                                    | 4000                                                                                                                                                            |
| Close Probability                                             | 10% / 25% / 50% / 75% / 90%                                                                                                                                     |

---

## Friday CRM audit (10 min)

- [ ] Every `Outreach Sent` row has Next Follow-Up Date
- [ ] Every `Replied` row has a booked call or same-day follow-up
- [ ] Every `Discovery Done` row has a proposal sent (or scheduled today)
- [ ] Zero rows emailed with `Contact Verified = No`
- [ ] Row count vs. 50-property plan (`property-research-scorecard.md` batch table)
