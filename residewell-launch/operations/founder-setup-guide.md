# Founder Setup Guide — David Vo

> Three one-time setups: **professional email**, **Calendly**, and your **CRM spreadsheet**. Total time: about 1 hour. Do these before sending outreach at volume.

---

## 1. Professional email (~30 min)

Cold outreach from `dvo.alltop@gmail.com` will work, but `david@residewell.com` gets more replies and looks like a real company. Set it up this week.

### Steps

1. **Buy the domain** (~$12/year, 10 min)
   - Go to [Namecheap](https://www.namecheap.com) or [Squarespace Domains](https://domains.squarespace.com)
   - Search `residewell.com`. If taken, good alternatives: `residewellatl.com`, `getresidewell.com`, `residewell.co`
   - Buy it with your Gmail account as the contact

2. **Set up Google Workspace** (~$7–8/month, 15 min)
   - Go to [workspace.google.com](https://workspace.google.com) → Get Started → Business Starter plan
   - Business name: ResideWell · Just you (1 user)
   - Connect the domain you just bought (Google walks you through verification — usually one click if you bought via Squarespace, or copy-paste one DNS record at Namecheap)
   - Create your address: **david@residewell.com**

3. **Finish the swap** (5 min)
   - Website: in `website/index.html`, replace both `dvo.alltop@gmail.com` instances with `david@residewell.com` (search for the TODO comments)
   - One-pager PDF: update the contact block and re-export
   - Send all property outreach from the new address
   - Keep the Gmail as your account-recovery and personal address

**Until this is done:** you can send your first few emails from Gmail — don't let email setup block Day 1 outreach.

---

## 2. Calendly (~15 min)

Your website buttons already point to a placeholder link. Make it real:

1. Go to [calendly.com](https://calendly.com) → sign up **with your new david@residewell.com** (or Gmail for now — you can change it later)
2. Create one event type:
   - **Name:** 15-Minute Discovery Call
   - **Duration:** 15 minutes
   - **Availability:** Tue–Thu 7:00–7:45 PM, plus Tue/Thu 12:00–12:45 PM if your day job allows
   - **Location:** Phone call (ask invitee for their number) — simplest for property managers
   - **Questions to add:** "Property name?" and "What's your role?"
3. Copy your link (it will look like `calendly.com/david-residewell/15min`)
4. **Paste it everywhere:**
   - `website/index.html` — replace `https://calendly.com/residewell/15min` at every TODO comment (4 spots)
   - Email templates — replace `[Calendar link]` in `sales/property-outreach-email-sequence.md`, `sales/linkedin-outreach-sequence.md`, and `sales/discovery-call-booking.md`
   - Your email signature

---

## 3. CRM spreadsheet — get the CSV into Google Sheets (~10 min)

You don't need to "find a file on your computer" — the easiest path skips downloading entirely.

### Easiest: copy-paste (no download needed)

1. In Cursor, click `residewell-launch/crm/target-properties-week1.csv` to open it
2. Click anywhere in the file → **Ctrl+A** (select all) → **Ctrl+C** (copy) — Mac: **Cmd+A**, **Cmd+C**
3. Go to [sheets.google.com](https://sheets.google.com) → click **Blank spreadsheet**
4. Click cell **A1** → **Ctrl+V** (paste)
5. Everything lands in one column — fix it: with the pasted cells still selected, go to **Data → Split text to columns** → separator: **Comma**
6. Rename the sheet: click "Untitled spreadsheet" (top left) → type **ResideWell Pipeline**

### Alternative: download the file, then import

1. **Get the file onto your computer:**
   - **From Cursor:** right-click `target-properties-week1.csv` in the file list → **Reveal in File Explorer** (Windows) / **Reveal in Finder** (Mac) — that shows you exactly where it lives
   - **From GitHub:** open your repo → `residewell-launch/crm/target-properties-week1.csv` → click the **Download raw file** button (down-arrow icon, top right of the file view) → it saves to your **Downloads** folder
2. **Import into Google Sheets:**
   - Go to [sheets.google.com](https://sheets.google.com) → Blank spreadsheet
   - **File → Import → Upload** → drag the CSV from Downloads
   - Import location: **Replace spreadsheet** · Separator: **Detect automatically** → **Import data**
3. Rename it **ResideWell Pipeline**

### After import (10 min) — make it work like a CRM

Follow `crm/week-1-crm-setup.md` for the full walkthrough. The three essentials:

1. **Freeze the header:** View → Freeze → 1 row
2. **Status dropdown:** select the Status column → Data → Data validation → add the 10 status values from `crm/crm-field-definitions.md`
3. **Color the urgent stuff:** Format → Conditional formatting → "Next Follow-Up Date" before today = red background

You now update this spreadsheet — not the CSV file. The CSV was just the template.

---

## Setup checklist

- [ ] Domain purchased (residewell.com or alternative)
- [ ] Google Workspace live → david@residewell.com working
- [ ] Website email TODOs swapped to the new address
- [ ] Calendly account + 15-Minute Discovery Call event created
- [ ] Real Calendly link pasted into website (4 spots) + email templates
- [ ] `ResideWell Pipeline` Google Sheet created from the week-1 CSV
- [ ] Status dropdown + frozen header + red-date formatting added
- [ ] First 3 properties researched and entered

**Then start Day 1 of the sprint:** `../README.md`.
