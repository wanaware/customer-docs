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
permission: ELEMENT_COLLECTIONS_UPDATE, STRUCTURE_TAG_RELATIONSHIP
product-area: Structures, Elements, and Collections
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: collections-structure-tags
video-status: planned
release-status: draft
-->

# Attach Collections to Structures

**Outcome:** Attach a Collection to the intended Structure node with a Structure Tag.

**For:** Customer administrators and engineers
**Permission:** Update Element Collections and Structure Tag relationships
**Time:** 3–5 minutes
**Changes made:** Changes a shared hierarchy attachment

## Before you start

- Confirm the Collection and its parent Element.
- Confirm the target Structure node and its ID.
- Review existing Structure Tags on the Collection.

## Add or remove the attachment

1. Open **Functions → Elements** and select the parent Element.
2. Open **Collections** and expand the intended Collection.
3. Find **Structure Tags**.
4. Search for and select the intended Structure node, or clear a selected tag to detach it.
5. Save the Collection.

**Expected result:** The intended tag remains selected after the Collection is reopened.

If the change cannot be saved, confirm both Collection update permission and Structure Tag relationship permission.

## Check your result

Refresh the Collection and confirm the Structure Tag. Open **Structures**, expand the intended node, and verify the Collection appears in the supported view.

## Undo this change

Remove the tag you added or reapply the one you removed, then save and verify. Detaching a Collection should not delete the Collection, its Element, or its assets.

## Learn, show me, do it

- **Learn:** [Understand Structures, Elements, and Collections](understand-structures-elements-and-collections)
- **Show me:** The organization clip will show the Collection attachment after publication.
- **Do it:** Open `/elements`, select an Element, and expand the Collection.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Collection%20Structure%20attachment%20help) with your company, affected user, Collection ID, Structure Tag name or ID, page URL, timestamp and time zone, and expected versus actual result. Never send passwords, credentials, tokens, or secret values.
