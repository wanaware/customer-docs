---
title: Prepare a Service Catalog bulk-upload file
excerpt: Choose the correct import type and prepare current template data for catalog validation.
deprecated: false
hidden: true
metadata:
  title: Prepare a Service Catalog bulk-upload file | WanAware Documentation
  description: Prepare a CSV, XLSX, or pasted spreadsheet for the Service Catalog bulk uploader.
  keywords:
    - service catalog template
    - existing provider id
    - catalog spreadsheet
  robots: noindex
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, data model owner
permission: update service_catalog
product-area: Asset Types and Service Catalog
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: service-catalog-bulk-prepare
video-status: planned
release-status: draft
-->

**Outcome:** Produce a current, correctly scoped spreadsheet that is ready for column mapping and entry validation.

**For:** Customer administrators and data model owners
**Permission:** `update service_catalog`
**Time:** 10–30 minutes
**Changes made:** Downloads a template and prepares local data; no catalog entries are created on this page

## If you're stuck

1. Confirm the custom Asset Type is still a draft and its customer Service Catalog is writable.
2. Choose one import type based on whether the parent provider already exists.
3. Download the current template from the same bulk-upload page; do not reuse an older template.
4. For existing providers, copy the exact provider ID from the catalog rather than its display name.
5. Keep a mixed spreadsheet together only when you understand the automatic job split and review each resulting job separately.

## Before you start

- Finish the Asset Type fields and catalog-support settings that determine the catalog shape.
- Select the customer catalog for the intended draft Asset Type, not a global or read-only catalog.
- Assemble approved names, descriptions, models, services, specifications, attributes, and compatibility data.
- Remove secrets, personal data, and unrelated customer records.

![Service Catalog bulk-upload flow from import type and column mapping through catalog verification.](https://files.readme.io/0d2baa2be947ae20e32b6e99d3fe6f848494b4d00d7eb8e7a572598adeb1425b-catalog-bulk-upload-flow.png)

## Field and option guide

### Choose the import type

| Choice | Use it when | Result |
| --- | --- | --- |
| **New providers with models or services** | The provider does not exist in the selected catalog. | Creates the provider and its child rows. |
| **Models or services for existing providers** | The provider already exists in the selected catalog. | Adds children beneath the provider identified in the file. |

### Prepare the columns

| Column | Required value | Where it comes from |
| --- | --- | --- |
| Provider name | Required for new-provider rows. Use the approved display name, such as Example Networks. | Approved source list. |
| Existing provider ID | Required for existing-provider imports. Copy the stable ID, not the display name. | Existing Service Catalog entry. |
| Model or service name | Enter one non-empty, consistently spelled child item per row, such as Edge 1000. | Approved source list. |
| Description | Write plain-language selection help without credentials or sensitive data. | Product or data owner. |
| Specifications or attributes | Match the columns and format in the template downloaded for this run. | Approved technical data. |
| Compatibility | Use the identifiers or choices required by the current template. | Approved compatibility matrix. |

These values appear in the provider hierarchy, catalog picker, entry details, dependent choices, and supported Asset fields after creation.

## Choose the import type and template

1. Open **Administration → Service Catalog**.
2. Select the draft Asset Type and its writable customer catalog.
3. Open **Bulk Upload Service Catalog**.
4. Under **What are you adding?**, choose:
   - **New providers with models or services** when the spreadsheet creates parent providers.
   - **Models or services for existing providers** when every child row belongs to an existing provider ID.
5. Select **Download template** for the chosen import type.

**Expected result:** The downloaded template matches both the selected catalog and import type.

If the expected import type is missing or the catalog is read-only, stop. Recheck the selected Asset Type, catalog ownership, draft status, and `update service_catalog` permission.

## Prepare the data

1. Keep the downloaded headers unchanged.
2. Add one logical provider, model, or service record per row according to the template.
3. For child-only rows, paste the exact existing provider ID into every applicable row.
4. Use consistent names and descriptions; do not create spelling variants for an existing item.
5. Enter specifications, attributes, and compatibility only in their corresponding template columns.
6. Remove blank trailing rows, merged cells, formulas whose displayed value cannot stand alone, and hidden unrelated data.
7. Save as CSV or XLSX. The uploaded file must be no larger than 100 MB.

For **Paste spreadsheet**, copy a rectangular range including the header row. Do not paste a title, notes, totals, or a second header into the same block.

**Expected result:** The file or pasted range has one header row, consistent columns, and every required parent identifier.

## Verify

1. Reopen the file after saving.
2. Confirm the first and last data rows are intact.
3. Search the chosen catalog for each provider name or ID represented by the file.
4. Confirm each row belongs to the chosen import type, or explicitly note the expected automatic split for mixed input.
5. Retain the exact prepared copy for reconciliation after upload.

## Undo this change

Delete or archive the local prepared file according to your data-handling policy. No Service Catalog record is created until the later **Create N entries** action.

## Learn and continue

- **Learn:** [Understand Asset Types and Service Catalogs](https://docs.wanaware.com/docs/understand-asset-types-and-service-catalogs)
- **In WanAware:** Open `/administration/service-catalog/{assetTypeId}/bulk-upload`.

## Next steps

- [Bulk upload Service Catalog entries](https://docs.wanaware.com/docs/bulk-upload-service-catalog-entries)
- [A Service Catalog entry does not save](https://docs.wanaware.com/docs/service-catalog-failures)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Preparing%20a%20Service%20Catalog%20upload) with your company, affected user, Asset Type ID, catalog ID, import choice, page URL, timestamp and time zone, header names, reproduction steps, and exact error. Attach only a sanitized sample approved for sharing. Never send passwords, credentials, access tokens, or secret values.
