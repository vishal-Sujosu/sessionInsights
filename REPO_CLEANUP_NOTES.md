# Repo Cleanup Notes

This file records temporary AI/planning artifacts that helped create the project but should not be treated as long-term application source.

## Keep for the repo

- `session-dashboard/` - the actual Next.js dashboard implementation.
- `README.md` - root project marker.
- `REPO_CLEANUP_NOTES.md` - this handoff/cleanup note.

## Temporary or unnecessary files

- `session-dashboard-blueprint.docx`
  - Original AI planning blueprint.
  - Useful for understanding the requested dashboard, but it is a binary document and not ideal source-control context.
  - Prefer this markdown note, project README, and source code for future AI handoff.

- `temp.zip`
  - A zip copy/form of the Word blueprint.
  - Not needed by the application.
  - Safe to delete once the useful context is captured elsewhere.

- `temp_extracted/`
  - Extracted internal contents of the Word `.docx` file.
  - Contains XML such as `word/document.xml`, styles, relationships, headers, footers, and doc properties.
  - This exists only because `.docx` files are zip packages internally.
  - Not needed to run, build, review, or maintain the app.
  - Safe to delete after the blueprint context has been summarized.

## Useful project context from the blueprint

- Product: read-only session activity monitoring dashboard.
- User goal: operators scan candidate/user sessions for integrity risks and open details for suspicious sessions.
- Main workflow: overview table, search/filter/sort, row click opens a right-side detail panel with metadata, stats, and timeline.
- Stack direction: Next.js, React, JavaScript, Tailwind CSS, shadcn-style UI primitives, Zustand for UI state, Lucide icons.
- Important UX expectation: first screen should be the usable dashboard table, not a marketing page.
- Future improvements mentioned: URL-synced filters, realtime updates/polling, CSV export, keyboard navigation, E2E tests.

## Commit recommendation

Commit the source code and this cleanup note. Do not commit `session-dashboard-blueprint.docx`, `temp.zip`, or `temp_extracted/` unless a reviewer specifically asks for the original planning artifact.
