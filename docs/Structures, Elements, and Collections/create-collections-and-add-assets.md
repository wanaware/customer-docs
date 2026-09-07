---
title: Create Collections and add Assets
excerpt: Create a Collection inside an Element and add the intended existing assets.
deprecated: false
hidden: false
metadata:
  title: Create Collections and add Assets | WanAware Documentation
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

**Outcome:** Create a named Collection inside an Element and add the intended assets once.

**For:** Customer administrators and engineers
**Permission:** `create element_collections` and `update element_collections`
**Time:** 5–10 minutes
**Changes made:** Creates a shared Collection and assigns Assets to it

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

![Collection details showing editable tags, associated example Assets, row actions, and Add Asset.](https://files.readme.io/e1dd388be88ea2f72a8d8a63520e4e733518bfcfb32b8198abbdd52ff286b632-collection-details-and-assets.png)
3. Select **+ Add Collection**.
4. Enter a clear Collection name.
5. Search for and select the intended assets.

![Select Asset dialog showing search, row selection, and Associate Asset for Collection membership.](https://files.readme.io/b98f77f4169b02437520e6cb9c5727c1eea7044f600d0509af464013123b90a1-collection-add-asset.png)
6. Confirm each asset's name, Asset Type, and unique identifier.
7. Save the Collection.

**Expected result:** The Collection appears once inside the Element and lists the selected assets.

If an asset is missing from the selector, clear its filters and confirm that the asset is in Inventory and visible to your role.

## Add or remove Assets later

1. Open the Collection.
2. Use its edit or asset-selection action.
3. Select an Asset to add it, or clear its selection to remove it from the Collection.
4. Save and reopen the Collection.

Adding an Asset to a Collection does not create another Asset. Removing an Asset from the Collection does not delete it from Inventory.

## Check your result

Open the Collection and compare every listed asset ID with the intended set. Confirm no similarly named asset was selected by mistake.

## Undo this change

Remove an incorrect Asset from the Collection. Before deleting the Collection, review its Assets and Structure Tags. Do not delete the Assets themselves.

## Learn and continue

- **Learn:** [Understand Structures, Elements, and Collections](https://docs.wanaware.com/docs/understand-structures-elements-and-collections)
- **In WanAware:** Open `/elements`, choose an Element, and select **Collections**.

## Next steps

- [Attach Collections to Structures](https://docs.wanaware.com/docs/attach-collections-to-structures)
- [Manage Site details](https://docs.wanaware.com/docs/manage-site-details)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Collection%20help) and include:

- Company, affected user, page URL, timestamp, and time zone
- Element ID, Collection ID, and affected Asset ID
- Expected versus actual Collection membership

Never send passwords, credentials, tokens, or secret values.
