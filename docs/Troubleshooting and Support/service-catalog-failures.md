---
title: A Service Catalog entry does not save
excerpt: Resolve missing Asset Types, unavailable entry actions, invalid compatibility, and save failures.
deprecated: false
hidden: false
metadata:
  title: A Service Catalog entry does not save | WanAware Documentation
  description: Fix missing entries, compatibility, and save problems in WanAware Service Catalog.
  keywords:
    - Service Catalog failed
    - catalog entry missing
    - compatibility missing
    - cannot save catalog entry
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer administrator, data model owner
permission: read service_catalog; update service_catalog for changes
product-area: Asset Types and Service Catalog
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-service-catalog
video-status: not-planned
release-status: draft
-->

Use this page when a draft Asset Type, catalog action, entry, compatible choice, or saved value is missing.

## Fast checks

1. Confirm the selected Asset Type and company workspace.
2. Confirm the custom Asset Type is still an editable draft.
3. Select **Refresh** and reselect the type.
4. Check Service Catalog permission.
5. Select the required parent before looking for child entry actions.
6. Search exact names to rule out a near-duplicate.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Draft Asset Type is absent | The save failed, the wrong company is selected, or access is missing | Reopen **Asset Types**, confirm **Draft** status, then check the Permission. |
| Model action is absent | A compatible parent has not been selected | Select the required provider or manufacturer context first. |
| Module or Software is absent | The selected context does not support that child type | Open the saved **Manufacturer**, then check whether that parent exposes **Module** or **Software**. If it does not, do not create a substitute entry type. |
| Save fails | A required name, source, specification, or attribute is invalid | Correct the labeled field and save again. |
| Expected compatible choice is missing | The catalog entry lacks the compatibility selection, or its parent value differs | Reopen the Service Catalog entry, correct compatibility, save, and refresh the Asset. |
| Entry appears twice | A near-duplicate was added | Preserve both records, identify current usage, and remove only the unused custom entry after review. |

## Verify the fix

Refresh Service Catalog, reopen the entry, and confirm its parent, details, and compatibility. Then use a documentation-only asset to verify the catalog-backed choices.

## Known limitations

Customer Service Catalog editing depends on the custom Asset Type lifecycle. A published Asset Type may be read-only.

Each parent supports only specific child entry types.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Service%20Catalog%20failure) and include:

- Company, affected user, page URL, timestamp, and time zone
- Asset Type ID, Service Catalog entry IDs, parent entry ID, and failed action
- Reproduction steps and the exact error

Never send passwords, credentials, tokens, or secret values.
