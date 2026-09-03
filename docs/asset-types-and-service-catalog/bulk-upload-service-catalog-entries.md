---
title: Bulk upload Service Catalog entries
excerpt: Map columns, resolve conflicts and errors, create catalog entries, and reconcile a bulk-upload job.
deprecated: false
hidden: false
metadata:
  title: Bulk upload Service Catalog entries | WanAware Documentation
  description: Validate and create Service Catalog providers, models, or services from a file or pasted spreadsheet.
  keywords:
    - bulk upload service catalog
    - catalog conflict
    - create catalog entries
    - existing provider id
  robots: index
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
screenshot-set: service-catalog-bulk-upload
video-status: blocked
release-status: draft
-->

# Bulk upload Service Catalog entries

> **Publication blocker:** The released UI and field contract have been reviewed, but the current release-equivalent verification workspace reports **Catalog bulk upload is not connected in this environment.** This draft must not be marked ready until a full job succeeds and Product and Support approve the results.

**Outcome:** Validate a prepared file, resolve mapping and row issues, create accepted catalog entries, and verify the final hierarchy.

**For:** Customer administrators and data model owners
**Permission:** `update service_catalog`
**Time:** 15–45 minutes, plus processing
**Changes made:** Creates shared Service Catalog entries; mixed or partially valid input can produce more than one job or a partial result

## If you're stuck

1. If the page says the service is not connected, stop and send the exact message to Support; do not invent a manual workaround for the same bulk job.
2. Confirm you selected a draft custom Asset Type and a writable customer catalog.
3. Replace a stale file with the current template for the chosen import type.
4. Map every needed source column and set unrelated columns to **Ignore**.
5. Resolve **Conflicts** and **Errors**, then revalidate before **Create N entries**.

## Before you start

- Complete [Prepare a Service Catalog bulk-upload file](prepare-a-service-catalog-bulk-upload-file).
- Keep the exact submitted file or pasted range for later reconciliation.
- For existing-provider imports, verify each provider ID against the selected catalog.
- Understand that mixed input can be split into separate processing jobs.
- Do not publish the Asset Type until the catalog is saved and verified.

![Service Catalog bulk-upload flow from import type and column mapping through catalog verification.](https://files.readme.io/0d2baa2be947ae20e32b6e99d3fe6f848494b4d00d7eb8e7a572598adeb1425b-catalog-bulk-upload-flow.png)

## Field and option guide

| UI label or result | Purpose | Required state or accepted format | Where the value comes from | Example | Where it appears later |
| --- | --- | --- | --- | --- | --- |
| **CSV or XLSX** | Uploads a saved spreadsheet file. | Current template; maximum 100 MB. | Prepared local file. | `catalog-import.xlsx` | Mapping and job summary. |
| **Paste spreadsheet** | Accepts a copied tabular range. | Include one header row and a rectangular data range. | Spreadsheet clipboard. | Header plus 10 rows | Mapping and validation. |
| Column mapping | Connects source headers to catalog fields. | Map required fields once; choose **Ignore** for unrelated columns. | File headers and current schema. | `Provider Name` → Provider name | Entry fields. |
| **Ready** | Entry has no blocking issue. | Review the final name and description. | Validation result. | — | Eligible for creation. |
| **Conflicts** | Entry collides with existing or submitted data. | Resolve the named identity or parent conflict. | Validation result. | Duplicate provider name | Blocks affected entry. |
| **Errors** | Entry violates a required format or relationship. | Correct the named field and revalidate. | Validation result. | Unknown provider ID | Blocks affected entry. |
| Editable name and description | Corrects a reviewed entry before creation. | Use approved customer-facing text. | Data owner. | Corrected model name | Catalog entry. |
| **Create N entries** | Submits the currently accepted set. | `N` must match the reviewed count. | Review summary. | Create 12 entries | Processing job. |

## Upload and map the data

1. Open the bulk-upload page for the selected Asset Type and writable catalog.
2. Choose the correct option under **What are you adding?**
3. Choose **CSV or XLSX** and select a file no larger than 100 MB, or choose **Paste spreadsheet** and paste the header plus data rows.
4. Select **Upload & validate**.
5. Review the automatic column mapping.
6. For each source column, select the exact destination field. Choose **Ignore** only when the source column is intentionally not imported.
7. Select **Review entries**.

**Expected result:** The review page reports counts for **Ready**, **Conflicts**, and **Errors** and preserves the selected import context.

If mapping fails, compare headers with a newly downloaded template. Do not map two different source meanings into one destination merely to continue.

## Resolve entries and create the job

1. Open **Conflicts** and compare each entry with the existing catalog and other submitted rows.
2. Open **Errors** and correct the exact field, parent ID, or format named by validation.
3. Edit the entry name or description only when the source value itself is wrong.
4. Revalidate after changes.
5. Recheck **Ready** and the total intended count.
6. Select **Create N entries** only when `N` matches the accepted set.
7. Keep the page open while progress is active.

**Expected result:** WanAware reports **Import processing finished** or **Import processing finished with errors**. Mixed input can produce separate jobs; reconcile each one independently.

If the outcome is partial, do not resubmit the entire source. Build a retry set from entries that were not created. If the submission outcome is uncertain, return to the catalog and search before creating another job.

8. Select **Return to catalog** to inspect results or **New import** to begin a separate prepared job.

## Verify

1. Return to the selected Service Catalog.
2. Search for every new provider and a sample of its models or services.
3. Open each sample and confirm name, description, parent, specifications, attributes, and compatibility.
4. For existing-provider imports, confirm children were attached to the intended provider ID.
5. Compare source rows with created, conflicted, errored, and unverified entries across every split job.
6. Create or edit one sample Asset and verify catalog-backed choices only after the catalog result is complete.

## Recover or retry

- Before **Create N entries**, replace the file or return to mapping without creating catalog records.
- After a partial result, submit only corrected entries that are still absent.
- For an uncertain result, search the catalog by stable parent and entry identity before retrying.
- To remove or correct a created entry, first check dependent Asset Types, catalog children, compatibility, and Assets; use only a released edit or delete action approved for that entry.

## Learn, show me, do it

- **Learn:** [Prepare a Service Catalog bulk-upload file](prepare-a-service-catalog-bulk-upload-file)
- **Show me:** This video remains blocked until the complete workflow succeeds in a release-equivalent environment.
- **Do it:** Open `/administration/service-catalog/{assetTypeId}/bulk-upload`.

## Next steps

- [Publish and verify an Asset Type](publish-and-verify-an-asset-type)
- [Service Catalog failures](../troubleshooting-and-support/service-catalog-failures)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Service%20Catalog%20bulk-upload%20help) with your company, affected user, Asset Type ID, catalog ID, import choice, page URL, submission timestamp and time zone, source row, provider ID, mapping, expected versus actual counts, and exact error. Attach only an approved sanitized sample. Never send passwords, credentials, access tokens, or secret values.
