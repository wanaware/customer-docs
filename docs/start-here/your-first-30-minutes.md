---
title: Your first 30 minutes
excerpt: Find an asset, inspect its details, and understand one relationship without changing customer data.
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
  description: Continue with the workflow that matches your role.
  pages:
    - type: basic
      slug: find-filter-and-inspect-assets
      title: Find, filter, and inspect assets
    - type: basic
      slug: view-asset-relationships
      title: View asset relationships
---

<!-- kb-meta
content-type: quickstart
audience: customer
permission: LAUNCHPAD, ASSETS
product-area: Platform
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Your first 30 minutes

**Outcome:** Find one asset in your inventory, open its details, and identify at least one connected resource.

**For:** Customer administrators, engineers, and support staff
**Permission:** Launchpad and Assets
**Time:** 10–30 minutes
**Changes made:** None

## Before you start

- Sign in to the company workspace your administrator assigned to you.
- Ask for the name of one known asset if you are unfamiliar with the demo data.
- If your inventory is empty, follow [Connect an AWS account](../assets-and-relationships/connect-an-aws-account) or [Add or import assets](../assets-and-relationships/add-or-import-assets) first.

## 1. Orient yourself on Launchpad

1. Open **Launchpad** from the left navigation.
2. Review the available widgets for asset counts, unclassified assets, environment information, or other summaries enabled for your account.
3. Treat Launchpad as a starting point. The detailed records live under **Functions**.

**Expected result:** You can see the workspace name and at least one available product area. Widgets vary by role and subscription.

If Launchpad is missing, your role may not include the `LAUNCHPAD` feature. See [Missing pages, actions, or permissions](../troubleshooting-and-support/missing-pages-actions-or-permissions).

## 2. Open the asset inventory

1. In the left navigation, expand **Functions**.
2. Select **Assets**.
3. Select the **Inventory** tab.

**Expected result:** The inventory opens in table or graph view. If it is still loading, wait for the progress state to finish before changing filters.

## 3. Find a known asset

1. Use the inventory search to enter the asset name or another known value.
2. If needed, add filters or adjust visible columns.
3. Select the asset row or node to open its details.

**Expected result:** The asset detail page shows the asset name and the tabs available for its type.

If the asset does not appear, clear filters and compare **Inventory** with **Discovery**. Then use [Missing, stale, or duplicate assets](../troubleshooting-and-support/missing-stale-or-duplicate-assets).

## 4. Review the asset

1. Confirm that the name and asset type match the resource you expected.
2. Review the available detail tabs. The exact tabs depend on the asset type and your permissions.
3. Note the asset identifier before reporting a data problem.

## 5. Open the relationship graph

1. Select **Relationship Graph** in the asset details.
2. Identify the selected asset and at least one connected node.
3. Select a connected node to inspect it.
4. Use available graph controls to search, group, focus, or change depth without editing the underlying data.

**Expected result:** You can describe one relationship in plain language, such as “this resource belongs to this account” or “this service depends on this asset.”

If no graph appears, read [Missing or unexpected relationships](../troubleshooting-and-support/missing-or-unexpected-relationships).

## Check your result

You have completed the first-value path when you can answer:

- Which asset did you inspect?
- What type of asset is it?
- Which resource is it connected to?
- Why is that relationship useful for your work?

## Show me

The Loom recording **Demo orientation and your first 30 minutes** will be embedded here after Product and Support approve the released UI recording. Until then, the written steps above are authoritative.

## Next steps

- [Find, filter, and inspect assets](../assets-and-relationships/find-filter-and-inspect-assets)
- [View asset relationships](../assets-and-relationships/view-asset-relationships)
- [Create and manage Structures](../organize-your-environment/create-and-manage-structures)
- [Configure a monitor and Worker](../monitor-and-investigate/configure-a-monitor-and-worker)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20with%20my%20first%2030%20minutes%20in%20WanAware) with your company, affected user, page URL, asset name or ID, timestamp and time zone, and what you expected to see. Never send credentials, access tokens, secrets, or private keys.
