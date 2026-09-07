---
title: A Relationship is missing or unexpected
excerpt: Check processing, source identity, graph filters, and relationship inputs before reporting a graph problem.
deprecated: false
hidden: false
metadata:
  title: A Relationship is missing or unexpected | WanAware Documentation
  description: Troubleshoot empty, missing, duplicated, or incorrect WanAware asset relationships.
  keywords:
    - relationship missing
    - relationship graph empty
    - wrong relationship
    - graph data
    - RDE
    - connect assets
    - add relationship
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer engineer, support
permission: read assets; update assets for Add Connection
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-relationships
video-status: not-planned
release-status: draft
-->

A relationship can appear after both assets are present and the applicable relationship processing has finished.

## Fast checks

1. Confirm the focused asset and company workspace.
2. Clear graph filters and grouping.
3. Return to the smallest graph depth, then expand gradually.
4. Confirm that both expected Assets exist and have the correct provider IDs.
5. Wait for active collection or import processing to finish.
6. Compare the source properties that should connect the two assets.

![Relationship Graph showing an example Asset, grouping controls, connected nodes, and hop-depth choices.](https://files.readme.io/e7db6b94b13b42103b48e405a82aa443fbbba2af036bdbfc2996c4d8b8170c41-asset-relationship-graph.png)

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Graph is empty | Filters, permissions, processing delay, or no supported relationship | Clear the view, confirm both assets, and wait for processing. |
| Expected asset is absent | The related asset is missing or in another workspace | Search Inventory and Discovery using its unique identifier. |
| Connection looks wrong | Similar names hide different source identities | Compare both WanAware IDs, provider IDs, accounts, and types. |
| Relationship disappeared | Source data changed or a related record was removed | Check the latest collection and both asset identities before editing anything. |
| Deep graph is incomplete | The requested depth exceeds currently available relationship data | Reduce depth and identify the first missing connection. |

## Verify the fix

Open both assets from the graph and confirm their source identities. The relationship should make sense using current source properties, not display names alone.

## Known limitations

Not every pair of assets should have a direct relationship, and not every asset type has the same relationship rules. Visual grouping does not create new relationships.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Relationship%20graph%20problem) and include:

- Company, page URL, graph depth, filters, timestamp, and time zone
- Both Asset IDs, Asset Types, provider IDs, and source account
- Expected Relationship, actual result, and a sanitized screenshot

Never send source-system credentials or secrets.
