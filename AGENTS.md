# ResideWell

## Cursor Cloud specific instructions

### What this repository is

ResideWell is **not a software/SaaS product**. It is a business "founder operating
system" / launch kit: markdown playbooks, CSV templates, AI-workflow prompts, and a
small static marketing website. There is **no package manager, build system, backend,
or automated test suite**.

- The `main` branch is currently an empty scaffold (only `README.md` and this file).
- The actual content lives under `residewell-launch/` (introduced by PR #1, branch
  `cursor/residewell-launch-os-1456`). If `residewell-launch/` is not present in your
  checkout, that PR has not been merged yet.

### Running the "application" (static website)

The only runnable artifact is the static site at `residewell-launch/website/`
(`simple-index.html` + `styles.css`). It has no dependencies — open the HTML directly
in a browser, or serve it with the standard library:

```
cd residewell-launch/website
python3 -m http.server 8080
# then open http://localhost:8080/simple-index.html
```

`python3` and `node` are available in the environment.

### Lint / test / build

There is nothing to lint, test, or build — the repo is markdown/CSV/HTML/CSS only.
No dependencies need to be installed for development.
