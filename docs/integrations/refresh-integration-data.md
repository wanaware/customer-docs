---
title: Refresh integration data
excerpt: Start an available collection run and confirm that WanAware accepted the request.
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
permission: INTEGRATIONS_UPDATE
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

**Outcome:** Start the available collection action for an existing integration and verify that the request was accepted.

**For:** Customer administrators and source-system owners
**Permission:** Update Integrations
**Time:** 2 minutes to start; processing time varies
**Changes made:** Starts a background collection that may add or update asset data

## Before you start

- Confirm that the connection is the intended account.
- Check whether another collection is already in progress.
- Avoid repeated requests; a new run may not make results arrive sooner.

## Start a refresh

1. Open **Administration → Integrations**.
2. Expand the correct provider card.
3. Confirm the connection name and source account context.
4. Select the available collection or refresh action.
5. Confirm the request when prompted.

**Expected result:** WanAware acknowledges the request or shows an in-progress state.

If the action is disabled, wait for the current run to finish or ask an administrator to check your permission.

## Check your result

1. Wait for the run to finish.
2. Open **Assets → Inventory**.
3. Search for a known record that changed at the source.
4. Confirm that its source context and expected fields are current.

## Undo this change

A completed collection cannot be undone as one action. Correct an individual asset only when the field is customer-editable and the source will not overwrite it. Contact Support before deleting multiple records.

## Learn, show me, do it

- **Learn:** [About integrations](about-integrations)
- **Show me:** The integration clip shows the refresh checkpoint after publication.
- **Do it:** Open `/administration/integrations` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20integration%20refresh%20help) with your company, affected user, provider, integration ID, request time and time zone, page URL, known source record ID, and expected versus actual result. Never send passwords, credentials, tokens, or secret values.
