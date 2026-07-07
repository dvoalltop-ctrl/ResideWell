# Week 1 CRM Setup (20 Minutes)

> **Goal:** Every morning, open one view and know **who to email today** to book discovery calls.

**CSV file:** `target-properties-week1.csv` (20 columns — open in Cursor for Rainbow CSV colors)

Full 39-column template: `target-properties-template.csv` (use when scaling to 50 properties)

---

## Step 1: Create the sheet (5 min)

1. Open `crm/target-properties-week1.csv` in Cursor (Rainbow CSV colors columns).
2. **File → Make a copy** in Google Sheets → name `ResideWell Pipeline`.
3. Or edit directly in Cursor and import to Sheets later.
4. Freeze row 1 in Sheets: **View → Freeze → 1 row**.

---

## Step 2: Column groups (Rainbow CSV)

| Column color group (left → right) | Fields                                              |
| --------------------------------- | --------------------------------------------------- |
| Property                          | Name, Submarket, Website, Units, Class, Management  |
| Contact                           | PM Name, Email, LinkedIn                            |
| Research                          | Amenities, Pain Point, Outreach Angle, Fit Score    |
| Outreach                          | Verified, Priority, Status                          |
| Dates                             | Last Contact, Next Follow-Up, Discovery Call, Notes |

See `csv-rainbow-guide.md` for the full template map.

---

## Step 3: Data validation on Status (3 min)

1. Select the **Status** column.
2. **Data → Data validation** → dropdown items (copy exactly):

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

---

## Step 4: Create 3 filter views (5 min)

| View                   | Filter                                                              | Sort                      |
| ---------------------- | ------------------------------------------------------------------- | ------------------------- |
| **TODAY — Follow-Ups** | Next Follow-Up Date ≤ today                                         | Fit Score high → low      |
| **READY TO EMAIL**     | Contact Verified = Yes AND Status = Contact Found                   | Fit Score high → low      |
| **HOT PIPELINE**       | Status in: Replied, Discovery Booked, Discovery Done, Proposal Sent | Last Contact oldest first |

---

## Step 5: Conditional formatting (3 min)

| Column              | Rule               | Color      |
| ------------------- | ------------------ | ---------- |
| Next Follow-Up Date | Before today       | Red        |
| Contact Verified    | "No"               | Yellow     |
| Status              | "Discovery Booked" | Green      |
| Fit Score           | ≥ 4                | Bold green |

---

## Step 6: Morning routine (5 min/day)

1. Open **TODAY — Follow-Ups** → send follow-ups due.
2. Open **READY TO EMAIL** → send up to 3 new Email 1s.
3. Update every touched row: Status, Last Contact, Next Follow-Up (+4 business days).
4. Check **HOT PIPELINE** — anyone waiting on you?

---

## Contact verification standard

Set `Contact Verified = Yes` only with **one of:**

- [ ] Email found on LinkedIn, property site, or management company directory
- [ ] Email pattern confirmed (colleague at same company uses firstname.lastname@mgmtco.com)
- [ ] LinkedIn connection accepted and message thread active
- [ ] Phone call confirmed name + role

**Never email a guessed address.** Unknown = "Unknown" in the cell, `Contact Verified = No`.

---

## Finding contacts (public sources, ~10 min)

### Property manager

1. LinkedIn: `"[Property Name]" community manager`
2. Property website → Team / Contact page
3. Call leasing office: _"Who is the community manager? I'd like to send resident programming info to the right person."_

### Regional manager

1. LinkedIn: `"[Management Company]" regional manager Atlanta`
2. Management company website → Team / Markets

Log source in Notes: `PM source: LinkedIn 2026-07-07`.

---

## Outreach Angle (required before Email 1)

One sentence in the `Outreach Angle` column:

> `[Specific amenity or public observation] + [implied opportunity]`

**Good:**

- "Dedicated yoga studio on amenities page but no class schedule listed — space looks underactivated."
- "Reviews praise the rooftop but no recurring resident events visible since March."
- "300+ units, professionally managed — strong resident engagement need."

**Bad (do not send):** "Great property!" / "I love your community." / anything generic.

---

## Week 1 CRM targets

| Milestone                          | Count       |
| ---------------------------------- | ----------- |
| Rows researched (Fit Score filled) | 15          |
| Contact Verified = Yes             | 20 contacts |
| Outreach Sent                      | 15          |
| Discovery Booked                   | 2           |

**50 properties is the month-1 goal** — see the batch plan in `property-research-scorecard.md`.
