# ResideWell

## Cursor Cloud specific instructions

This repository is **content/documentation only** — a founder "operating system" of Markdown docs, CSV templates, and one static marketing website. There is **no package manager, build system, test suite, or backend service**. There are no dependencies to install.

### The only runnable artifact: the static landing page

The website lives in `residewell-launch/website/` (`simple-index.html`, `styles.css`, `landing-page-copy.md`). `styles.css` must stay alongside the HTML.

- Preview by serving the folder and opening `simple-index.html` in a browser:
  - `cd residewell-launch/website && python3 -m http.server 8000`
  - then open `http://localhost:8000/simple-index.html`
- It is a fully static page (no build step). Opening the file directly also works, but serving over HTTP is closest to a real preview.
- In-page CTAs (e.g. "Schedule a Call") are anchor links to `#contact`; clicking them updates the URL hash and scrolls to the contact section.

### Editing content

- CSV templates (`crm/`, `operations/`) are meant to be opened in a spreadsheet; keep header rows intact.
- There is nothing to lint/test/build. "Verification" for changes = view the affected Markdown/CSV, or serve and visually check the landing page.
