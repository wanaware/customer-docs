---
title: View Asset Relationships
excerpt: Read an asset's Relationship Graph and open connected context.
deprecated: false
hidden: false
metadata:
  title: View Asset Relationships | WanAware Documentation
  description: Open and interpret the WanAware Relationship Graph for an asset.
  keywords:
    - Relationship Graph
    - connected assets
    - asset relationships
    - graph depth
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer
permission: read assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: assets-relationship-graph
video-status: planned
release-status: draft
-->

**Outcome:** Identify how one Asset is connected to another resource and open the connected record.

**For:** Customer administrators, engineers, and support staff
**Permission:** `read assets`
**Time:** About 5 minutes
**Changes made:** None

## If you're stuck

- Clear **Filters** and reduce **Group by** before treating a node as missing.
- Confirm both Assets exist in Inventory and use the correct unique IDs.
- Relationship Graph is for exploring supported relationships; it does not provide arbitrary relationship drawing.

## Before you start

Find a known asset in **Functions → Assets → Inventory** and verify its identity.

## View and control guide

| UI item | Scope | What it changes |
| --- | --- | --- |
| Asset **Relationship Graph** | One focused Asset and connected records | View only; selecting a node changes focus |
| Inventory **Graph** | Broader Inventory graph | View only; can show more records |
| Relationship depth | Number of connected levels around the focused Asset | View only; higher depth can make the graph crowded |
| **Filters** | Visible nodes by supported record values | View only; hidden nodes still exist |
| **Group by** | Visual organization | View only; does not create relationships |
| **Clear All Filters** | Removes active graph filters | Restores the unfiltered visible result |

## Explore the graph

1. Select **Relationship Graph** in the asset details.
2. Locate the focused asset.
3. Follow a connecting line to a neighboring node.
4. Select the neighboring node to review its label and available details.

![Relationship Graph showing an example Asset, grouping controls, connected nodes, and hop-depth choices.](https://files.readme.io/e7db6b94b13b42103b48e405a82aa443fbbba2af036bdbfc2996c4d8b8170c41-asset-relationship-graph.png)
5. Change relationship depth only when more context is needed.
6. Use search or focus controls to return to a known resource.

![Diagram comparing Relationships discovered from supported data with the Add Connection workflow.](https://files.readme.io/fd3b4ca4a6cbc14ce30fbdb256acbdc5e4570a96df168cb255f3c880254076e0-relationship-sources.png)

**Expected result:** You can name the focused asset, one connected resource, and the represented relationship.

## Use the broader graph

1. Return to **Assets** and select **Graph**.
2. Use **Filters** to narrow by supported Asset Type, Site, Structure, or Element values.
3. Use **Group by** to organize the view.

![Asset Inventory Graph showing scope, grouping controls, relationship insights, and an example Asset node.](https://files.readme.io/7513307ac9b0ffc6439cb078aa582881594b9ea1cc92b907ce734dd54d814474-asset-inventory-graph.png)
4. Select **Clear All Filters** before treating an absent node as missing data.

Grouping and filtering change only the view. They do not create or remove relationships.

## Check your result

Open the connected asset and confirm its name, Asset Type, and source context match the selected node.

## Recover from an empty or surprising graph

- Confirm both expected assets exist.
- Wait for active ingestion and relationship processing to finish.
- Clear graph filters and reduce grouping.
- Compare the graph with source properties.
- Use [Missing or unexpected relationships](https://docs.wanaware.com/docs/missing-or-unexpected-relationships).

## Learn and continue

- **Learn:** [Relationship Discovery Engine](https://docs.wanaware.com/docs/relationship-discovery-engine)
- **In WanAware:** Open an asset in `/assets/inventory` and select **Relationship Graph**.

## Next steps

- [Add a supported network connection](https://docs.wanaware.com/docs/add-a-network-connection)
- [Fix a missing or unexpected Relationship](https://docs.wanaware.com/docs/missing-or-unexpected-relationships)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20relationship%20graph%20question) with your company, affected user, both sanitized asset IDs, page URL, graph depth, filters, timestamp and time zone, and a screenshot. Never send passwords, credentials, tokens, or secret values.
