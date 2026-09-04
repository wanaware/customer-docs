---
title: Your first 30 minutes
excerpt: Find an asset, review its details, and understand one useful relationship.
deprecated: false
hidden: false
metadata:
  title: Your first 30 minutes | WanAware Documentation
  description: Follow the fastest WanAware onboarding path from Launchpad to an asset relationship.
  keywords:
    - first 30 minutes
    - onboarding
    - find an asset
    - relationship graph
  robots: index
next:
  description: Continue with the workflow that matches what you found.
  pages:
    - type: basic
      slug: populate-asset-details
      title: Populate asset details
    - type: basic
      slug: add-a-network-connection
      title: Add a supported network connection
---

<!-- kb-meta
content-type: quickstart
audience: customer
permission: read my_launchpad and read assets
product-area: Platform
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: start-first-30-minutes
video-status: planned
release-status: draft
-->

**Outcome:** Find one asset, confirm what it is, and identify at least one connected resource.

**For:** Customer administrators, engineers, and support staff
**Permission:** `read my_launchpad` and `read assets`
**Time:** 10–30 minutes
**Changes made:** None

## If you're stuck

- If Launchpad is missing, ask an administrator to verify `read my_launchpad`—not a permission named `view launchpad`.
- If Assets is missing, verify `read assets`.
- Clear Inventory and graph filters before reporting a missing Asset or Relationship.

## Before you start

- Sign in to the company workspace assigned to you.
- Ask for the name of one known asset if the data is unfamiliar.
- If the inventory is empty, ask an administrator to [add an integration](https://docs.wanaware.com/docs/add-an-integration) or [add or import assets](https://docs.wanaware.com/docs/add-or-import-assets).

## Page and checkpoint guide

| Where | What it answers | Successful checkpoint |
| --- | --- | --- |
| **Launchpad** | What data and shortcuts are available to your Role? | You can identify the relevant starting card or navigation area |
| **Functions → Assets → Inventory** | Which Assets are maintained in this workspace? | You can find one known Asset by name or unique value |
| Asset details | What is the Asset and how is it enriched? | Name, Asset Type, source context, and tags are understandable |
| **Relationship Graph** | What supported records connect to this Asset? | You can follow one edge to a correctly identified record |

## 1. Orient yourself

1. Open **Launchpad** from the left navigation.
2. Review the summaries available to your role.

![Launchpad showing example workspace summaries, available widgets, and links into detailed product areas.](https://files.readme.io/4110fc0e44ac5a1c2e80f05909c954f86f11daaa682ef188a05aaa43d3117d03-launchpad-overview.png)
3. In the left navigation, open **Functions → Assets**.
4. Select **Inventory**.

**Expected result:** The inventory opens. Counts and Launchpad cards can vary by role and company configuration.

If a page is missing, see [Missing pages, actions, or permissions](https://docs.wanaware.com/docs/missing-pages-actions-or-permissions).

## 2. Find a known asset

1. Search using the full asset name or another unique value.
2. Clear existing filters if the result is missing.
3. Select the asset row or node.
4. Confirm the asset name, type, and source context.

![Asset Inventory table narrowed to one example record with search, view controls, tags, source, and row actions.](https://files.readme.io/774951d14c429216eaee3e6dbd0d3669db23958ebbe371c86761a9215a279a8e-asset-inventory-table-and-filters.png)

**Expected result:** The asset detail page opens with the tabs supported by its Asset Type.

## 3. Understand its details

1. Review the asset name and Data Tags.
2. Review any **Structure Tags** to see where the asset is organized.
3. Open each available detail tab and note any fields that are incomplete.

![Example Asset details with identity metadata masked, editable tags, schema tabs, and Asset Type-specific fields.](https://files.readme.io/f2860c4ff35f029d8eb212855afa8553adb364a83ff9dada649026d0107faff8-asset-details-fields.png)
4. Do not edit data during this path unless the workspace owner has asked you to.

## 4. Follow one relationship

1. Select **Relationship Graph**.
2. Find the focused asset.
3. Follow one connecting line to another node.
4. Select that node and identify the connected resource.

![Relationship Graph showing an example Asset, grouping controls, connected nodes, and hop-depth choices.](https://files.readme.io/e7db6b94b13b42103b48e405a82aa443fbbba2af036bdbfc2996c4d8b8170c41-asset-relationship-graph.png)
5. Clear filters before deciding that a relationship is missing.

**Expected result:** You can describe one relationship in plain language.

## Check your result

You have completed the Explore path when you can answer:

- Which asset did you inspect?
- What type of asset is it?
- Which resource is connected to it?
- Why is that connection useful to your work?

## Learn and continue

- **Learn:** [Product map and terminology](https://docs.wanaware.com/docs/product-map-and-terminology)
- **In WanAware:** Open `/launchpad` in your WanAware workspace.

## Next steps

- [Populate asset details](https://docs.wanaware.com/docs/populate-asset-details)
- [View asset relationships](https://docs.wanaware.com/docs/view-asset-relationships)
- [Build your environment](https://docs.wanaware.com/docs/administrator-setup-path)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20with%20my%20first%2030%20minutes%20in%20WanAware) with your company, affected user, page URL, asset name or ID, timestamp and time zone, reproduction steps, and expected versus actual behavior. Never send passwords, credentials, tokens, or secret values.
