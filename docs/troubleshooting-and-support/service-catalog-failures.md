---
title: Service Catalog failures
excerpt: Resolve missing Asset Types, unavailable entry actions, invalid compatibility, and save failures.
deprecated: false
hidden: false
metadata:
  title: Service Catalog failures | WanAware Documentation
  description: Fix missing entries, compatibility, and save problems in WanAware Service Catalog.
  keywords:
    - Service Catalog failed
    - catalog entry missing
    - compatibility missing
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

# Service Catalog failures

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
| Draft Asset Type is absent | The draft was not saved, the wrong company is selected, or access is missing | Reopen Asset Types, confirm Draft status, then check permission. |
| Model action is absent | A compatible parent has not been selected | Select the required provider or manufacturer context first. |
| Module or Software is absent | The selected context does not support that child type | Select the appropriate manufacturer and use only the available entry types. |
| Save fails | A required name, source, specification, or attribute is invalid | Correct the labeled field and save again. |
| Expected compatible choice is missing | Compatibility was not selected or its parent value differs | Reopen the catalog entry, correct compatibility, save, and refresh the asset. |
| Entry appears twice | A near-duplicate was added | Preserve both records, identify current usage, and remove only the unused custom entry after review. |

## Verify the fix

Refresh Service Catalog, reopen the entry, and confirm its parent, details, and compatibility. Then use a documentation-only asset to verify the catalog-backed choices.

## Known limitations

Customer catalog editing depends on the custom Asset Type lifecycle. A published type may be read-only, and not every child entry is valid under every parent.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Service%20Catalog%20failure) with your company, affected user, Asset Type and entry IDs, parent entry ID, failed action, page URL, timestamp and time zone, reproduction steps, and exact error. Never send passwords, credentials, tokens, or secret values.
