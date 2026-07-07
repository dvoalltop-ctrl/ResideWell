# Week 1 CRM Setup (20 Minutes)

Your CRM exists to answer one question every morning: **Who do I contact today to book a discovery call?**

---

## Step 1: Create the Sheet (5 min)

1. Open `target-properties-template.csv` in Google Sheets.
2. **File → Make a copy** → name it `ResideWell Pipeline`.
3. Delete example rows if you imported `target-properties-example.csv`.
4. Freeze row 1: **View → Freeze → 1 row**.

---

## Step 2: Hide Columns You Don't Need Yet (2 min)

Right-click column header → **Hide column** for these until after your first proposal:

- Ownership Company
- Regional Manager Email (keep Name + LinkedIn visible)
- Rooftop, Courtyard, Pool, Resident Lounge (keep Amenities + Fitness Center + Yoga/Studio)
- Review Themes
- Proposed Offer, Proposal Sent, Deal Value, Close Probability

**Week 1 visible columns (minimum):**

| Column | Why |
|--------|-----|
| Property Name | Identity |
| Neighborhood/Submarket | Personalization |
| Website | Research |
| Unit Count | Qualify |
| Property Class | Qualify |
| Management Company | Portfolio angle |
| Property Manager Name | Outreach |
| Property Manager Email | Outreach |
| Property Manager LinkedIn | Backup channel |
| Regional Manager Name | Escalation |
| Regional Manager LinkedIn | Escalation |
| Amenities | Personalization hook |
| Likely Pain Point | Email angle |
| Quick Score | Prioritize |
| Contact Verified | Gate before send |
| Personalization Hook | Required for Email 1 |
| Status | Pipeline |
| Last Contact Date | Discipline |
| Next Follow-Up Date | **Most important column** |
| Notes | Call/email history |

---

## Step 3: Add Data Validation on Status (3 min)

1. Select the **Status** column (click column letter).
2. **Data → Data validation**.
3. Dropdown items (copy exactly):

```
Not Contacted
Contact Found
Outreach Sent
Replied
Discovery Booked
Discovery Done
Proposal Sent
Pilot Won
Lost
Nurture
```

**Week 1 rule:** If it's not in this list, don't invent a new status.

---

## Step 4: Create 3 Filter Views (5 min)

**View 1: TODAY — Follow-Ups**
- Filter: `Next Follow-Up Date` = today or in the past
- Sort: Quick Score high → low

**View 2: READY TO EMAIL**
- Filter: `Contact Verified` = Yes AND `Status` = Contact Found
- Sort: Quick Score high → low

**View 5: HOT PIPELINE**
- Filter: `Status` is any of: Replied, Discovery Booked, Discovery Done, Proposal Sent
- Sort: Last Contact Date oldest first (don't let hot leads go cold)

---

## Step 5: Conditional Format (3 min)

| Column | Rule | Color |
|--------|------|-------|
| Next Follow-Up Date | Date is before today | Red background |
| Contact Verified | Text is "No" | Yellow background |
| Status | Text is "Discovery Booked" | Green background |
| Quick Score | Number ≥ 4 | Bold / green text |

---

## Step 6: Morning Routine (5 min/day)

Open **TODAY — Follow-Ups** view first.

1. Send follow-ups due today (email, LinkedIn, or call).
2. Open **READY TO EMAIL** → send up to 3 new Email 1s.
3. Update every touched row: Status, Last Contact Date, Next Follow-Up (+4 business days).
4. Check **HOT PIPELINE** — anyone waiting on you?

---

## Contact Verification Standard

Set `Contact Verified = Yes` only when you have **one of:**

- [ ] Email found on LinkedIn, property site, or management company directory
- [ ] Email pattern confirmed (e.g., colleague at same company uses firstname.lastname@mgmtco.com)
- [ ] LinkedIn connection accepted and InMail/message sent
- [ ] Phone call confirmed name + role (email optional if LinkedIn active)

Set `Contact Verified = No` if you only have a guessed email. **Do not send cold email to guessed addresses.**

---

## Finding Contacts (15 min per property)

### Property Manager
1. LinkedIn: `"[Property Name]" + community manager`
2. LinkedIn: `"[Property Name]" + general manager`
3. Call leasing office: *"Who is the community manager? I'd like to send resident programming info to the right person."*
4. Property website → Contact / Team page

### Regional Manager
1. LinkedIn: `"[Management Company]" + regional manager + Atlanta`
2. LinkedIn: `"[Management Company]" + VP operations + multifamily`
3. Management company website → Team / Markets

**Log in Notes:** `PM source: LinkedIn 2026-07-07` — so you remember what's verified.

---

## Personalization Hook (Required Before Email 1)

One sentence in `Personalization Hook` column. Formula:

> `[Specific amenity or observation] + [implied opportunity]`

**Good examples:**
- "Dedicated yoga studio on amenities page but no class schedule listed — space looks underactivated."
- "Google reviews mention great rooftop but no recurring resident events on Instagram since March."
- "250+ units, Greystar-managed — portfolio expansion potential if pilot works."

**Bad examples (do not send):**
- "Great property!" (generic)
- "I love your community." (fake familiarity)
- "You should do more events." (presumptuous)

Paste the hook into Email 1 — see `sales/property-outreach-email-sequence.md`.

---

## Week 1 CRM Targets

| Milestone | Count |
|-----------|-------|
| Rows researched (Quick Score filled) | 15 |
| Contact Verified = Yes | 20 contacts across properties |
| Outreach Sent | 15 |
| Discovery Booked | 2 |

**50 properties is a month-1 goal. Week 1 = 15 quality rows with verified contacts.**
