# CarTech Shop Manager — AI Work Log

A shared log for any AI tool working on this project.
Read this first before touching any code. Update it at the end of every session.

---

## Project Overview

**What this is:** A custom shop management system built to replace Tekmetric for CarTech Automotive LLC (Smyrna, TN). The goal is a 1-to-1 feature match with Tekmetric, built in plain HTML/CSS/JS and hosted on Firebase — the same stack as the owner's budget app.

**Why:** Tekmetric costs $199–$439/month. A custom build cuts that cost entirely and can be tailored to the shop's exact workflow.

**Who uses it:** Scott Leonard (Shop Manager), Emmanuel Salazar, Ruben Salazar, Shawn Leonard (Tech / Web Admin / builder)

**Tech stack:**
- Plain HTML + CSS + JavaScript — no frameworks, no libraries, no build tools
- Firebase Firestore — real-time database (same as the budget app at C:\Users\wrong\Documents\Code\Budget)
- Firebase Hosting — static file serving
- Firebase Auth — per-user login (method TBD — Google or email/password)
- Fonts: Oswald (headings) + Montserrat (body) from Google Fonts

**Design reference:** Real Tekmetric app (app.tekmetric.com) — Shawn has an active account and can provide screenshots of any page on request.

**Color/style tokens (defined in styles.css):**
- Background: #f0f2f5
- Surface: #ffffff
- Accent (blue): #05b6fc
- Green: #22c55e
- Yellow: #f59e0b
- Red: #ef4444
- Purple: #a855f7
- Topbar: dark (#111827)

---

## Current File Structure

```
tekmetric2.0/
├── index.html      — Full app shell (all pages, modals, drawer)
├── styles.css      — All styling
├── app.js          — All logic + mock data (no real backend yet)
├── AI_LOG.md       — This file
```

All pages currently live inside `index.html` as `<section>` elements toggled with CSS. Navigation is handled by `navigate()` in `app.js`.

---

## What's Been Built ✅

### App Shell
- Dark topbar with logo, global search, Recent ROs button, Support / Notifications / Messages / Active Time Clocks icons, shop name dropdown, user avatar (SL)
- Collapsible sidebar with full nav: Shop Dashboard, Job Board, Tech Board, Appointments, Orders, Reports, Customers, Vendors, Canned Jobs, Inspections, Vehicles, Invoices
- Mobile hamburger nav + overlay
- Hash-based routing — `navigate('page-name')` sets `location.hash`, page refresh stays on current tab
- Toast notification system

### Shop Dashboard (page-dashboard)
- Tab bar: Shop Overview / Activity Feed / My Hours / My Timesheet / My Commission
- Shop Overview: 4 stat cards (Open ROs, Today's Appointments, Month Revenue, Avg RO)
- Recent ROs table (clickable rows open RO drawer)
- Today's Schedule panel
- Activity Feed tab: searchable, filterable list of shop events with category badges (Estimate, RO Status, Authorization, Invoice, Other)

### Job Board / Repair Orders (page-repair-orders)
- Kanban board view with 3 columns: Estimates, Work In Progress, Completed
- Columns are full-width (flex: 1), not fixed-width — fills the page
- Column headers have colored top border: gray (Estimates), yellow (WIP), green (Completed)
- Column headers show title + count + Sort by dropdown
- RO cards show: RO number, date, customer name, phone, vehicle (year/make/model · color), "Requires Authorization" badge (yellow, on Estimates), tech avatar circle (color-coded per tech), total dollar amount
- Card font sizes bumped up for readability
- Board toolbar: search input (id="ro-search"), All Latest / Employees / Appt Type filter chips, Active status chip, board/list view toggle, + Repair Order button
- List view: table with RO#, customer, vehicle, status, advisor, tech, date, total
- Clicking any card/row opens the RO detail drawer

### RO Detail Drawer
- Slides in from right, overlay backdrop
- Header: RO number, created date, advisor, tech, status dropdown
- Customer info card: name, phone (tel link), email (mailto link)
- Vehicle info card: year/make/model, color/VIN, mileage in
- Labor/Services line items with Add Service button
- Parts line items with Add Part button
- Totals section: labor, parts, tax (9.75% TN rate on parts), grand total
- Notes/customer complaint textarea
- Footer: Print RO, Email Customer, Save Changes buttons

### New RO Modal
- Customer select (populated from customers array)
- Vehicle select (filters by selected customer)
- Service Advisor select (Scott/Emmanuel/Ruben/Shawn)
- Assigned Tech select
- Status select
- Mileage In input
- Customer Complaint / Notes textarea

### Appointments (page-appointments)
- Week calendar view (Mon–Fri, 8AM–4PM)
- Prev/Next week navigation
- Today highlighted in accent color
- Appointment cards show customer name + service
- New Appointment modal: customer, vehicle, date, time, service, duration, notes

### Customers (page-customers)
- Searchable table: initials avatar, name (+ notes), phone, email, vehicle count, last visit, total spent
- Add Customer modal: first/last name, phone, email, address, notes

### Vehicles (page-vehicles)
- Searchable table: year/make/model, color, VIN, mileage, owner (with avatar), RO count badge
- Add Vehicle button (placeholder toast for now)

### Invoices (page-invoices)
- Filter tabs: All / Paid / Unpaid / Overdue
- Searchable table: invoice#, customer, vehicle, RO#, date, amount, status badge, action button (Mark Paid / View)
- Mark Paid updates RO status to Completed in memory

### Global Search
- Enter key in topbar search: matches RO number → opens drawer; matches customer name → goes to customers page with filter applied

### Mock Data (all in-memory, will be replaced with Firestore)
- 6 customers
- 7 vehicles
- 6 repair orders (statuses: In Progress ×2, Estimate ×1, Approved ×1, Completed ×1, Invoiced ×1)
- 5 appointments
- 12 activity feed entries

---

## What Still Needs to Be Built ❌

### Pages (UI only — screenshots needed from Tekmetric)
- **Tech Board** — technician job assignment view, probably a different kanban layout per tech
- **Full Inspections page** — digital inspection forms, checklists
- **Orders page** — parts orders, purchase orders
- **Reports page** — shop performance, revenue, technician productivity
- **Vendors page** — vendor list and management
- **Canned Jobs page** — saved job/service templates
- **Settings** — shop info, user management, labor rates, tax rates

### Features within existing pages
- RO drawer: Add Service / Add Part actually working (form + save)
- Customer detail view (clicking a customer row)
- Vehicle detail view
- Drag-and-drop RO cards between board columns
- RO search/filter actually filtering in real time on the board

### Backend (Firebase — do after UI is complete)
1. Create new Firebase project (console.firebase.google.com)
2. Enable Firestore, Authentication, Hosting
3. Copy firebase.json + firestore.rules pattern from budget app (C:\Users\wrong\Documents\Code\Budget)
4. Create js/firebase-init.js — same pattern as budget app's firebase-init.js
5. Replace all mock data arrays with Firestore collections:
   - `customers` collection
   - `vehicles` collection
   - `repairOrders` collection
   - `appointments` collection
   - `activityFeed` collection (or generate from RO changes)
6. Add real-time listeners (onSnapshot) so changes appear on all screens without refresh
7. Login page — method TBD (Google sign-in like budget app, or email/password)
8. Per-user permissions (techs see their jobs, advisors see everything)

---

## Key Decisions Made

| Decision | What was chosen | Why |
|---|---|---|
| Framework | None — plain HTML/CSS/JS | Keep it simple, no build tooling |
| Database | Firebase Firestore | Same as budget app, real-time built in, free tier generous |
| Auth method | TBD | Deferred until UI is complete |
| Column layout | flex: 1 (fills page) | Fixed 300px columns left too much dead space |
| Hash routing | location.hash = page | Refresh stays on current page |
| Tax rate | 9.75% on parts only | Tennessee sales tax, labor not taxed |
| Hosting | Firebase Hosting | Free, fast, same as budget app |

---

## Budget App Reference

The budget app at `C:\Users\wrong\Documents\Code\Budget` uses the identical stack.
- Firebase project ID: `my-budget-c1b3c`
- Auth: Google sign-in via popup
- DB: Firestore v8 compat SDK
- Pattern to copy: `js/firebase-init.js` — exports `db`, `auth`, `userDoc()`, `signInWithGoogle()`, `onAuthStateChanged()`

When wiring up Firebase for this app, replicate that pattern exactly. Use a **separate** Firebase project — do not share the budget app's project.

---

## How to Run Locally

Just open `index.html` in a browser. No server needed for the current UI-only version. Once Firebase is wired up, use `firebase serve` from this directory.

---

## Session Log

### 2026-06-12 — Claude (claude-sonnet-4-6)
- Cloned repo from github.com/ShawnRLeonard/tekmetric2.0 to C:\Users\wrong\Documents\Code\tekmetric2.0
- Fixed broken `ro-search` JS reference — search input was wired in app.js but missing from HTML
- Added search input to board toolbar to match Tekmetric layout
- Added colored top-border to board column headers (gray/yellow/green by status)
- Made board columns full-width (flex: 1) instead of fixed 300px — fills the page
- Increased font sizes on RO cards and column headers for readability
- Added hash-based routing so page refresh stays on current tab instead of returning to dashboard
- Created this AI_LOG.md

### Next session priorities:
1. Drop screenshots of remaining Tekmetric pages for UI build-out
2. Tech Board page
3. Add Service / Add Part functionality in RO drawer
4. Drag-and-drop between board columns

---

_Update this log at the end of every session. Lead with what changed, note any decisions made and why._
