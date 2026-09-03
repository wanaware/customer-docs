---
title: Refresh integration data
excerpt: Start the provider adapter's documented collection action and confirm that WanAware accepted the request.
deprecated: false
hidden: false
metadata:
  title: Refresh integration data | WanAware Documentation
  description: Run or refresh a WanAware integration collection safely.
  keywords:
    - refresh integration
    - run collection
    - update inventory
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: update integrations
product-area: Integrations
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: integrations-refresh
video-status: not-planned
release-status: draft
-->

# Refresh integration data

**Outcome:** Start the provider adapter's documented collection action and confirm that WanAware accepted the request.

**For:** Customer administrators and source-system owners
**Permission:** `update integrations`
**Time:** 2 minutes to start; processing time varies
**Changes made:** Starts a background collection that may add or update Asset data

## If you're stuck

- The page-level **Refresh** button reloads the integration list; it does not start a new collection.
- Open the provider adapter and use the collection action named there.
- If a run is already processing, do not submit another request.

## Before you start

- Confirm that the connection is the intended account.
- Check whether another collection is already in progress.
- Avoid repeated requests; a new run may not make results arrive sooner.

## Field and option guide

| UI item | Purpose | Expected behavior |
| --- | --- | --- |
| **Refresh** | Reloads connection cards and their displayed state | Does not start collection |
| **Test connection** | Checks whether a saved connection can be reached | Returns a success or exact failure without proving inventory was imported |
| Provider collection action | Starts the provider's inventory workflow | Exact label and prerequisites are defined in the provider adapter |

## Start a collection

1. Open **Administration → Integrations**.
2. Expand the correct provider card and locate the saved connection.
3. Confirm the connection name and source account context.
4. Open the matching provider adapter and confirm its collection-action label.
5. Select that collection action once.

**Expected result:** WanAware confirms the request or shows an in-progress state.

If the action is disabled, wait for the current run to finish or ask an administrator to confirm `update integrations`.

## Check your result

1. Wait for the run to finish.
2. Open **Functions → Assets → Inventory** (`/assets/inventory`).
3. Search for a known record that changed at the source.
4. Confirm that its source context and expected fields are current.

## Undo this change

WanAware does not provide one action that reverses a completed collection. Correct an individual Asset only when the field is customer-editable and source-owned data does not replace it.

Contact Support before deleting multiple records.

## Learn, show me, do it

- **Learn:** [About integrations](https://docs.wanaware.com/docs/about-integrations)
- **Show me:** The integration clip shows the refresh checkpoint after publication.
- **Do it:** Open **Administration → Integrations** (`/administration/integrations`).

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20Integration%20collection%20help) and include:

- Company, affected user, page URL, request time, and time zone
- Provider, Integration ID, and known source record ID
- Expected versus actual result

Never send passwords, credentials, tokens, or secret values.
