---
title: Add a supported network connection
excerpt: Use Add Connection for eligible assets and verify the resulting relationship.
deprecated: false
hidden: false
metadata:
  title: Add a supported network connection | WanAware Documentation
  description: Create and verify a supported network connection between eligible WanAware assets.
  keywords:
    - Add Connection
    - connect assets
    - add relationship
    - network connection
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, network engineer
permission: update assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: assets-add-connection
video-status: planned
release-status: draft
-->

# Add a supported network connection

![Diagram comparing Relationships discovered from supported data with the Add Connection workflow.](https://files.readme.io/fd3b4ca4a6cbc14ce30fbdb256acbdc5e4570a96df168cb255f3c880254076e0-relationship-sources.png)

**Outcome:** Connect two eligible assets through the released network connection flow and verify the relationship.

**For:** Customer administrators and network engineers
**Permission:** `update assets`
**Time:** 5–10 minutes
**Changes made:** May create an IP block or endpoint information and creates a shared network relationship

## If you're stuck

- **Add Connection** appears only for eligible Assets; it is not a general relationship editor.
- Confirm the source and target are different Assets before entering endpoint data.
- Stop at **Preview Connection** if the IP block, endpoint direction, or Asset identity is wrong.

## Before you start

- Confirm both assets exist and represent different resources.
- Gather the approved IP block and endpoint details.
- Check the current Relationship Graph to avoid a duplicate connection.
- Use **Add Connection** only for eligible network relationships. WanAware does not provide a general action for arbitrary relationship drawing.

## Field and option guide

| UI item | Purpose | What to verify | Where it appears later |
| --- | --- | --- | --- |
| Source asset | Starting side of the connection | Name, Asset Type, and unique ID | Preview and Relationship Graph |
| **Target asset** | Other side of the connection | Different eligible Asset, confirmed by unique ID | Preview and Relationship Graph |
| **IP block** | Network range associated with the connection | Existing approved block or the exact new block details accepted by the form | Connection preview and related details |
| **Endpoints** | Source and target interface or address context | Correct value on the correct side; no accidental reversal | Connection preview |
| **Preview Connection** | Final pre-creation review | Source, target, block, and endpoints all match the approved design | No data change yet |
| **Create Connection** | Creates the reviewed network relationship | Select once after preview verification | Relationship Graph |

## Create the connection

1. Open the eligible source asset.
2. Select **Add Connection**.
3. If prompted for a source asset, confirm the correct source.
4. In **Target asset**, search for and select the other asset.
5. In **IP block**, select an existing block or enter the supported new-block details.
6. In **Endpoints**, select or enter the source and target endpoint information.
7. Select **Preview Connection**.
8. Review the source, target, IP block, and both endpoints.
9. Select **Create Connection**.

**Expected result:** WanAware shows **Network connection created**.

If the same asset is selected twice, endpoint addresses match when they should not, or required fields are unavailable, return to the relevant step and correct the input before creating the connection.

## Check your result

1. Open the source asset's **Relationship Graph**.
2. Clear graph filters.
3. Find the target asset and select it.
4. Confirm the source and target details match the preview.

## Undo this change

Use the released remove action only after confirming which endpoint, IP block, or relationship record will be affected. If removal behavior is unclear, contact Support before deleting an asset or shared IP block.

## Learn, show me, do it

- **Learn:** [Relationship Discovery Engine](relationship-discovery-engine)
- **Show me:** The asset-and-relationship clip will include the preview and verification checkpoints after publication.
- **Do it:** Open an eligible asset in `/assets/inventory` and select **Add Connection**.

## Next steps

- [View asset relationships](view-asset-relationships)
- [Missing or unexpected relationships](../troubleshooting-and-support/missing-or-unexpected-relationships)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20network%20connection%20help) with your company, affected user, sanitized source and target asset IDs, page URL, failed step, timestamp and time zone, reproduction steps, and exact error. Never send passwords, credentials, tokens, or secret values.
