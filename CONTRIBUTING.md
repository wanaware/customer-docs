# Contributing to WanAware customer documentation

## Before writing

- Confirm that the workflow is available in the released Portal.
- Test it with a normal customer role and an appropriate administrator role.
- Identify the exact permission that controls the page or action.
- Use a demo workspace with no real customer information.

## Required page metadata

Use ReadMe-supported frontmatter and the private HTML metadata block shown below. Update `last-verified` whenever the procedure is retested.

```markdown
---
title: Page title
excerpt: One sentence describing the outcome.
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
permission: ASSETS
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: YYYY-MM-DD
-->
```

## Workflow article contract

Every workflow must state:

- Outcome, audience, permission, and approximate time
- Prerequisites and side effects
- Numbered steps using the current UI labels
- Expected results at important checkpoints
- A final success check
- Common failures beside the relevant step
- Undo or deletion guidance when data changes
- Learn, Show me, and Do it links when available
- Related next steps and the standard support footer

## Troubleshooting article contract

Every troubleshooting article must include:

- The exact symptom or error wording
- Fast checks in the order customers should try them
- Likely cause and fix pairs
- A verification step
- Known limitations
- The standard evidence checklist and support link

## Screenshot and video rules

- Use only non-customer demo data.
- Crop out browser profiles, unrelated tabs, personal notifications, account menus, and tokens.
- Add useful alt text; do not repeat the surrounding sentence.
- Caption every Loom recording and include its transcript in `recordings/`.
- Keep videos between one and three minutes.
- Written instructions remain authoritative.

## Legacy Stonly content

Every legacy Stonly guide is outdated. Use the legacy register only to identify customer topics and redirect destinations. Never reuse its steps, screenshots, labels, permissions, or behavioral claims. Rebuild replacement guidance from the released WanAware product and validate it with Product and Support.

## Review gate

A page can merge only after:

- Product has run the procedure and approved its accuracy.
- Support has confirmed that the recovery and escalation guidance is sufficient.
- Links, images, spelling, metadata, and search terms pass automated checks.
- The diff contains no secrets, customer data, internal URLs, or private architecture.

Use [Contact WanAware Support](./docs/troubleshooting-and-support/contact-wanaware-support.md) as the evidence-checklist source for every support footer. Add article-specific identifiers when they help Support diagnose the problem, but never request a password, credential, token, private key, or secret value.
