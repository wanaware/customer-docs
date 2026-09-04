# Contributing to WanAware customer documentation

WanAware customer documentation is public. Describe only released, observable product behavior. Do not include source code, private architecture, credentials, trade secrets, internal URLs, or customer data.

## Choose the content type

- **Tutorial:** A guided learning path that reaches a meaningful customer outcome.
- **Workflow:** Numbered instructions for one task.
- **Reference:** Factual information a customer looks up while working.
- **Concept:** An explanation of terminology or how product records fit together.
- **Troubleshooting:** A symptom-first path from fast checks to verified recovery and Support.

Keep one primary purpose per page. Link to nearby troubleshooting instead of adding a long error appendix to every workflow.

## Work on the correct branch

- Use `v1.0_kb-customer-docs-improvements` for the current customer-experience preview and review.
- Keep upcoming product behavior on an unpublished feature branch.
- Merge to `v1.0` only after Product and Support approval.
- Do not modify API Reference files as part of customer workflow documentation.

## Required page metadata

Use ReadMe-supported frontmatter and the `kb-meta` block below.

```markdown
---
title: Page title
excerpt: One sentence describing the customer outcome.
deprecated: false
hidden: false
metadata:
  title: Page title | WanAware Documentation
  description: A clear search description.
  keywords:
    - customer search phrase
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer
permission: read assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: assets-example
video-status: not-planned
release-status: draft
-->
```

Use `release-status: draft` while any verification, screenshot, video, or review evidence is pending. Change it to `ready` only when the page has a verified release and date, approved media, and both required reviews.

ReadMe renders the page title from frontmatter. Do not repeat it as a body H1; begin body sections at H2.

## Workflow page contract

Every workflow must include:

- A 30-second **If you're stuck** section with the fastest safe checks
- Outcome, audience, permission, time, and changes made
- Prerequisites and warnings before consequential actions
- Compact field, option, action, or checkpoint tables using exact released UI labels; keep tables to four columns or fewer
- Numbered steps using released UI labels
- Expected results at important checkpoints
- Troubleshooting beside the step where failure occurs
- A final verification procedure
- Undo, detach, or deletion guidance when data changes
- A **Learn and continue** section with a relevant concept and the exact **In WanAware** navigation path
- Related next steps and the standard Support footer

The article is authoritative. Add **Show me** only when an approved clip exists, and hide the clip as soon as its UI or behavior becomes inaccurate.

## Troubleshooting page contract

Begin with the visible symptom or error. Then include **Fast checks**, **Common causes and fixes**, **Verify the fix**, **Known limitations**, and **Get help**.

## Integration writing

Keep the core integration guides provider-neutral. Put source-specific fields, permissions, setup resources, and cleanup in `docs/integrations/providers/`. A new provider should add an adapter without rewriting the customer onboarding path.

## Harbor Meridian Systems media

- Use only the Harbor Meridian Systems account and records whose names begin with `Docs Demo`.
- Treat Harbor Meridian Systems as media provenance only. Customer-facing instructions, captions, search benchmarks, and support guidance must remain environment-agnostic.
- Use Light mode by default; show Light and Dark only in the theme article.
- Capture the complete useful portal width. Publish static PNG files at 1500–2200 pixels wide and 500 KB or less so controls and field labels remain legible on high-density displays.
- Write useful alt text between 40 and 150 characters.
- Crop browser profiles, unrelated tabs, emails, notifications, account menus, internal URLs, identifiers, payment details, credentials, tokens, and secret values.
- Never cosmetically alter visible product UI. If a release-excluded area is central to the screen, wait for the correct product flag.
- Use only masked test information for billing. Never purchase, cancel, or change a real payment method to create documentation.
- Keep `media/screenshot-manifest.json` current and remove every temporary `Docs Demo` record after verification.
- Use the `wanaware-ai-assisted-v4` frame. The generated backdrop supplies decoration only; the sanitized portal capture remains an exact, unscaled layer.
- Place each screenshot beside the step or decision it explains. Never append a workflow screenshot after **Get help**.
- Keep `media/workflow-visual-coverage.json` and `media/screenshot-placements.json` complete. Every screenshot-capable action must name a captured screenshot or an explicit capture blocker. A release-ready article cannot remain incomplete or blocked.

Repository-relative images do not render in the ReadMe preview. Keep every source file versioned, upload the approved publishing PNG through ReadMe's image API, record its `files.readme.io` URL in `media/publishing-manifest.json`, and use that URL in customer articles. Keep the API credential in a secure environment or GitHub secret; never commit it.

## Product diagrams

Keep editable D2 source, generated review SVG, and optimized 1440-pixel publishing PNG together in `media/diagrams/`. D2 source is authoritative. Customer articles embed the ReadMe-hosted PNG recorded in `media/publishing-manifest.json`.

Render each diagram with D2 v0.8.2, the bundled ELK layout engine, and the pinned dark theme:

```sh
d2 --layout elk --theme 200 --pad 36 --omit-version media/diagrams/organization-model.d2 media/diagrams/organization-model.svg
```

Review the SVG and PNG at desktop and narrow article widths. Record the local SHA-256, dimensions, byte count, alt text, article slugs, and ReadMe URL in the publishing manifest. Run `npm run check` and `npm run check:media`. Do not add remote icons, customer data, internal identifiers, or first-release-excluded features to a diagram.

## Legacy Stonly material

Every legacy Stonly guide is outdated. Use the migration register only to identify topics and redirect candidates. Never reuse its steps, screenshots, labels, permissions, or behavioral claims.

## Review and release gate

Before publication:

1. Run every procedure in Harbor Meridian Systems with a normal customer role and the appropriate administrator role.
2. Verify permissions, side effects, background processing, messages, recovery, links, media, and cleanup.
3. Run `npm run check`. For a pull request targeting `v1.0`, also run `npm run check:release`.
4. Render the ReadMe branch preview and run Docs Audit.
5. Obtain Product approval for behavior and Support approval for clarity, diagnosis, and escalation.
6. Confirm the complete pull request does not contain planning, agent instruction, handoff, or status documents.

## Standard Support evidence

Every unresolved path leads to [Contact WanAware Support](./docs/troubleshooting-and-support/contact-wanaware-support.md). Ask for company, affected user, relevant record IDs, timestamp and time zone, page URL, reproduction steps, expected versus actual behavior, and a screenshot or exact error. Explicitly warn customers never to send passwords, credentials, tokens, keys, payment details, or secret values.
