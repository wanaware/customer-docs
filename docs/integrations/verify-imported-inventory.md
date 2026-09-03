---
title: Verify imported inventory
excerpt: Confirm that an integration produced the expected asset records and source context.
deprecated: false
hidden: false
metadata:
  title: Verify imported inventory | WanAware Documentation
  description: Verify imported WanAware assets after an integration collection.
  keywords:
    - verify import
    - integration inventory
    - missing imported asset
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: ASSETS
product-area: Integrations
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: integrations-verify
video-status: planned
release-status: draft
-->

# Verify imported inventory

**Outcome:** Find a known source record and confirm that WanAware imported it into the correct workspace.

**For:** Customer administrators and engineers
**Permission:** Assets
**Time:** 5–10 minutes after collection finishes
**Changes made:** None

## Before you start

- Choose two or three known, non-sensitive source records.
- Record their names and stable source identifiers.
- Wait for the integration collection to finish.

## Verify the records

1. Open **Functions → Assets → Inventory**.
2. Clear all search terms and filters.
3. Search for a known source identifier.
4. Open the matching asset.
5. Confirm its name, Asset Type, provider, source account context, and important detail fields.
6. Repeat with a second source record of a different supported type.

**Expected result:** Each record appears once and can be traced to the intended integration.

If a record is missing, also check **Discovery** and wait for active processing to finish. Then use [Missing, stale, or duplicate assets](../troubleshooting-and-support/missing-stale-or-duplicate-assets).

## Check your result

Compare the source and WanAware side by side. Record the source identifier, WanAware asset ID, and collection time for each verified example.

## Learn, show me, do it

- **Learn:** [About integrations](about-integrations)
- **Show me:** The integration/import clip will include this verification after publication.
- **Do it:** Open `/assets/inventory` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20imported%20inventory%20verification) with your company, affected user, provider, integration ID, sanitized source and asset IDs, page URL, collection timestamp and time zone, and expected versus actual behavior. Never send passwords, credentials, tokens, or secret values.
