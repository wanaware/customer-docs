---
title: Add an Asset
excerpt: Create one Asset in Discovery or Inventory and verify its saved identity.
deprecated: false
hidden: false
metadata:
  title: Add an Asset | WanAware Documentation
  description: Create a single Asset with the correct Asset Type, status, name, tags, and required details.
  keywords:
    - add asset
    - manual asset
    - create asset
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: create assets
product-area: Assets
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: assets-add-manual
video-status: planned
release-status: draft
-->

**Outcome:** Create one Asset in the intended workspace and reopen it to confirm the saved values.

**For:** Customer administrators and engineers
**Permission:** `create assets`
**Time:** About 5 minutes
**Changes made:** Creates a shared Asset record

## If you're stuck

1. Confirm you opened **Functions → Assets → Inventory** and selected **+ Add Asset → Add Manual Asset**.
2. If **+ Add Asset** is missing, ask an administrator to add `create assets` to your Role.
3. If a field is missing, recheck the selected **Asset Type**; each type supplies a different form.
4. If **Add Asset** stays disabled, complete every field marked as required and resolve any dependent choice that was cleared.

## Before you start

- Search Inventory and Discovery for the proposed name and source identifier to avoid a duplicate.
- Know whether the record should enter **Inventory** as maintained data or **Discovery** for review.
- Confirm the Asset Type before entering type-specific details. Changing it can replace the visible field set.
- Never enter a password, credential, token, or secret in a name, tag, identifier, or free-text field.

## Field and option guide

### Information you need

| UI label | What to enter or choose | Where the value comes from |
| --- | --- | --- |
| **Asset Type** | Required. Choose the existing type that defines the Asset's fields and icon. | Your data model or administrator. |
| **Status** | Required. Choose **Inventory** for a maintained Asset or **Discovery** for a record that still needs review. | Your team's review process. |
| **Asset Name** | Required. Enter a durable name that distinguishes this Asset from similar records. | Approved inventory or source system. |
| **Data Tags** | Optional. Add searchable labels using your team's naming convention. | Your tagging standard. |
| **Structure Tags** | Optional. Select an existing Structure Tag that places the Asset in the intended hierarchy. | **Functions → Structures**. |
| Type-specific fields | Complete every field marked required. Formats and choices come from the selected Asset Type. | Source records, the accountable owner, or a Service Catalog. |

### What happens next

| UI label | Example | Where it appears after saving |
| --- | --- | --- |
| **Asset Type** | Router | Asset header, Type column, and detail tabs. |
| **Status** | Discovery | The matching **Discovery** or **Inventory** tab. |
| **Asset Name** | `edge-router-01` | Search, Table, Map, Graph, and Relationship Graph. |
| **Data Tags** | `environment:production` | Asset details and supported filters. |
| **Structure Tags** | East Region | Asset details and Structure context. |
| Type-specific fields | Serial number or model | Asset Type-specific detail tabs. |

## Create the Asset

1. Open **Functions → Assets → Inventory** (`/assets/inventory`).
2. Select **+ Add Asset**, then **Add Manual Asset**.
3. Find and choose the **Asset Type**. Use **Cards** when the icon and description help distinguish similar types, or switch to **List** to scan names in a compact table. **All**, **Global**, and **Custom** filter the picker; they do not change the saved Asset.

![Add Asset picker in Cards view with an example Asset Type selected.](https://files.readme.io/743419e22806adfdcdba5cc4622b822cc3311facb98812330edb7817b5886759-add-asset-type-cards.png)

The Cards view keeps each Asset Type's icon and explanation visible. The blue outline and check mark identify the current selection.

![Add Asset picker in List view with an example Asset Type selected.](https://files.readme.io/b4c702e2288fed6c3e75877cbb4543af6e0e22fd26ae4f967d869cb6da735535-add-asset-type-list.png)

The List view shows the same Asset Types and selection in a denser layout. Switching views does not clear the selected type, search, or Global/Custom filter. Recheck the form after selection because its fields can change.

4. Choose **Inventory** or **Discovery** under **Status**.
5. Enter **Asset Name** exactly as users should search for it.
6. Add approved **Data Tags** and **Structure Tags**. Do not create a new spelling of an existing tag.
7. Complete the required type-specific fields. For a catalog-backed field, select an existing catalog entry rather than typing a near-duplicate.

![Add Asset form showing a sample name, Inventory status, and required IP Block fields before submission.](https://files.readme.io/07a0242867fc88b01afff516ad5e33ee3a0f95c1f9f75e1459a25ea0691f05cd-add-asset-input-state.png)

After the type is selected, confirm the **Selected Type** summary before entering data. In this example, **Manufacturer** and **Model** are catalog-backed choices, while **OS Version**, **Firmware Version**, **Serial Number**, and **Switch Name** are fields supplied by the Asset Type. Your fields can differ because administrators configure each Asset Type.

8. Select **Add Asset**.

**Expected result:** WanAware displays **Asset Added!** and identifies whether the record was added to Inventory or Discovery.

![Asset Added confirmation showing the saved status and the View Asset, Add Another, and Done next actions.](https://files.readme.io/2a73c1f7d75aa61f97ba7502ec7564b2d42ee9b528728c0b4b860093de90c6c2-add-asset-success.png)

If the save fails, keep the form open, record the exact error, and correct only the named field. If no field is named, copy the non-secret values before refreshing so you can retry without guessing.

9. Select **View Asset** to inspect the record, **Add Another** to keep the same workflow open, or **Done** to close it.

## Verify

1. Open the tab selected under **Status**.
2. Clear old search text and filters.
3. Search for the exact **Asset Name**.
4. Open the result and confirm its Asset Type, status, tags, and required details.
5. Refresh the page and confirm the same values remain.

## Undo this change

Correct an editable value and save again. If the record should not exist, follow [Delete Assets safely](https://docs.wanaware.com/docs/delete-assets-safely) after checking Relationships, Structure Tags, and Collection membership. Do not delete a record merely to change a field.

## Learn and continue

- **Learn:** [Add or import Assets](https://docs.wanaware.com/docs/add-or-import-assets)
- **In WanAware:** Open `/assets/inventory`, then select **+ Add Asset → Add Manual Asset**.

## Next steps

- [Populate Asset details](https://docs.wanaware.com/docs/populate-asset-details)
- [Find, filter, and inspect Assets](https://docs.wanaware.com/docs/find-filter-and-inspect-assets)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20adding%20an%20Asset) with your company, affected user, Asset Type, intended status, page URL, timestamp and time zone, reproduction steps, and exact error. Include the Asset ID if one was created. Never send passwords, credentials, access tokens, or secret values.
