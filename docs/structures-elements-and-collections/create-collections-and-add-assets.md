---
title: Create Collections and add assets
excerpt: Create a Collection inside an Element and add the intended existing assets.
deprecated: false
hidden: false
metadata:
  title: Create Collections and add assets | WanAware Documentation
  description: Create a WanAware Collection and associate existing assets with it.
  keywords:
    - Add Collection
    - add assets to Collection
    - asset group
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: create element_collections and update element_collections
product-area: Structures, Elements, and Collections
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: collections-create-assets
video-status: planned
release-status: draft
-->

# Create Collections and add assets

**Outcome:** Create a named Collection inside an Element and add the intended assets once.

**For:** Customer administrators and engineers
**Permission:** `create element_collections` and `update element_collections`
**Time:** 5–10 minutes
**Changes made:** Creates a shared Collection and asset associations

## If you're stuck

- Confirm the parent Element before creating the Collection; a Collection is not a top-level record.
- Clear Asset-selection filters and search by unique ID, not only name.
- Removing an Asset from a Collection does not delete the Asset from Inventory.

## Before you start

- Open the intended Element and confirm its ID.
- Search its current Collections for the same purpose.
- Gather unique identifiers for the assets you intend to add.

## Field and option guide

| UI item | Purpose | What to enter or select | Verification |
| --- | --- | --- | --- |
| Parent Element | Owns the Collection | Intended Application, Service, or Site | Collection appears only under that Element |
| Collection name | Describes the group | Unique, purpose-based name | Collection list shows one match |
| Asset selector | Adds existing Inventory records | Confirm name, Asset Type, and unique ID | Collection lists each selected Asset once |
| **Structure Tags** | Attaches the Collection to a Structure | Exact existing Structure node | Structure context and Collection details |

## Create the Collection

1. Open **Functions → Elements** and select the Element.
2. Open **Collections**.
3. Select **+ Add Collection**.
4. Enter a clear Collection name.
5. Search for and select the intended assets.
6. Confirm each asset's name, Asset Type, and unique identifier.
7. Save the Collection.

**Expected result:** The Collection appears once inside the Element and lists the selected assets.

If an asset is missing from the selector, clear its filters and confirm that the asset is in Inventory and visible to your role.

## Add or remove assets later

1. Open the Collection.
2. Use its edit or asset-selection action.
3. Add or clear the intended asset selection.
4. Save and reopen the Collection.

Associating an asset does not create a duplicate asset. Removing an association does not delete the asset.

## Check your result

Open the Collection and compare every listed asset ID with the intended set. Confirm no similarly named asset was selected by mistake.

## Undo this change

Detach an incorrect asset from the Collection. Before deleting the Collection, review all assets and Structure Tags attached to it. Do not delete the assets themselves.

## Learn, show me, do it

- **Learn:** [Understand Structures, Elements, and Collections](understand-structures-elements-and-collections)
- **Show me:** The organization clip will show Collection creation and asset selection after publication.
- **Do it:** Open `/elements`, choose an Element, and select **Collections**.

## Next steps

- [Attach Collections to Structures](attach-collections-to-structures)
- [Manage Site details](manage-site-details)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Collection%20help) with your company, affected user, Element and Collection IDs, affected asset ID, page URL, timestamp and time zone, and expected versus actual membership. Never send passwords, credentials, tokens, or secret values.
