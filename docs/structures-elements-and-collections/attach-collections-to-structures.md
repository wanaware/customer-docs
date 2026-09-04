---
title: Attach Collections to Structures
excerpt: Add or remove Structure Tags from a Collection and verify its hierarchy attachment.
deprecated: false
hidden: false
metadata:
  title: Attach Collections to Structures | WanAware Documentation
  description: Use Structure Tags to attach or detach a WanAware Collection from a Structure.
  keywords:
    - attach Collection to Structure
    - Collection Structure Tag
    - detach Collection
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: update element_collections
product-area: Structures, Elements, and Collections
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: collections-structure-tags
video-status: planned
release-status: draft
-->

**Outcome:** Attach a Collection to the intended Structure node with a Structure Tag.

**For:** Customer administrators and engineers
**Permission:** `update element_collections`
**Time:** 3–5 minutes
**Changes made:** Changes a shared hierarchy attachment

## If you're stuck

- Open the parent Element, then its **Collections** tab; Collections are not top-level records.
- Search Structure Tags by exact name and verify the parent path.
- Detach by clearing the selected Structure Tag, not by deleting the Collection.

## Before you start

- Confirm the Collection and its parent Element.
- Confirm the target Structure node and its ID.
- Review existing Structure Tags on the Collection.

## Field and option guide

| UI item | Meaning | Safe use |
| --- | --- | --- |
| Parent Element | Owns the Collection | Confirm its ID before changing the child Collection |
| **Structure Tags** | Existing Structure nodes attachable to the Collection | Select the exact node by hierarchy path |
| Selected tag | Current attachment | Clear only the tag that should be detached |

## Attach or detach the Collection

1. Open **Functions → Elements** and select the parent Element.
2. Open **Collections** and expand the intended Collection.
3. Find **Structure Tags**.
4. Select the intended Structure Tag to attach the Collection, or clear the tag to detach the Collection.

![Collection details showing editable tags, associated example Assets, row actions, and Add Asset.](https://files.readme.io/e1dd388be88ea2f72a8d8a63520e4e733518bfcfb32b8198abbdd52ff286b632-collection-details-and-assets.png)
5. Save the Collection.

**Expected result:** After reopening, the Collection displays the intended Structure Tag.

If the change cannot be saved, confirm both Collection update permission and Structure Tag relationship permission.

## Check your result

Refresh the Collection and confirm the Structure Tag. Open **Structures**, expand the intended node, and verify the Collection appears in the supported view.

## Undo this change

Remove the tag you added or reapply the one you removed, then save and verify. Detaching a Collection should not delete the Collection, its Element, or its assets.

## Learn and continue

- **Learn:** [Understand Structures, Elements, and Collections](https://docs.wanaware.com/docs/understand-structures-elements-and-collections)
- **In WanAware:** Open **Functions → Elements** (`/elements`), select an Element, and expand the Collection.

## Next steps

- [Create Collections and add Assets](https://docs.wanaware.com/docs/create-collections-and-add-assets)
- [Fix an Element or Collection attachment](https://docs.wanaware.com/docs/structure-element-or-collection-attachment-failures)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Collection%20Structure%20attachment%20help) with your company, affected user, Collection ID, Structure Tag name or ID, page URL, timestamp and time zone, and expected versus actual result. Never send passwords, credentials, tokens, or secret values.
