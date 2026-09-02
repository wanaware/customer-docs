---
title: Create Elements and Collections
excerpt: Create an operational grouping, add a Collection, and associate the right assets.
deprecated: false
hidden: false
metadata:
  title: Create Elements and Collections | WanAware Documentation
  description: Create WanAware Elements and Collections and associate assets safely.
  keywords:
    - Add Element
    - Add Collection
    - attach asset
    - Site
    - Structure Tags
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: ELEMENTS
product-area: Elements
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Create Elements and Collections

**Outcome:** Create an Element, add a Collection inside it, and associate assets with the correct operational grouping.

**For:** Customer administrators and engineers
**Permission:** Elements; create or update permission for changes
**Time:** 10 minutes
**Changes made:** Creates shared Element and Collection records and may change asset associations

## Before you start

- Search **Elements** for the intended name.
- Choose the correct **Element Type**. A Site has location-specific behavior.
- Decide which Structure Tags and Data Tags apply.
- Identify the assets that belong in the Collection.

## Create an Element

1. Open **Functions → Elements**.
2. Search for a similar record before adding a new one.
3. Select **+ Add Element**.
4. Enter **Element Name**, or leave it blank only when a system-generated name is acceptable.
5. Choose the required **Element Type**.
6. Select existing **Structure Tags** where they apply.
7. Continue through any type-specific fields, then select **Add Element**.

**Expected result:** WanAware shows **Element Added!** with actions such as **View Element**, **Add Collection**, or **Add Asset to Site** when applicable.

## Add a Collection

1. Select **View Element**.
2. Open the **Collections** tab.
3. Select **+ Add Collection**.
4. Enter a clear Collection name and any approved Data Tags or Structure Tags.
5. Save the Collection.

**Expected result:** The Collection appears inside the Element.

## Associate assets

1. Open the Collection.
2. Use the available add or associate-asset action.
3. Search for the intended Inventory asset.
4. Confirm its name, type, and identifier before selecting it.
5. Save the association.

Associating an asset does not create a duplicate asset. It adds the existing record to the operational grouping.

## Check your result

Return to the Element and confirm:

- The Element type and tags are correct.
- The Collection is listed once.
- Each associated asset is the intended record.

## Undo this change

- Detach an incorrect asset instead of deleting the asset itself.
- Review Collection contents before choosing **Delete Collection**.
- Review an Element's Collections, Site assets, monitors, and Structure Tags before deleting the Element.

## Learn, show me, do it

- **Learn:** [Product map and terminology](../start-here/product-map-and-terminology)
- **Show me:** The Loom recording **Organize assets with Structures, Elements, and Collections** will be embedded here after approval.
- **Do it:** Open `/elements` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20with%20WanAware%20Elements%20or%20Collections) with your company, Element and Collection names or IDs, affected asset ID, page URL, timestamp and time zone, and a screenshot. Never send credentials or tokens.
