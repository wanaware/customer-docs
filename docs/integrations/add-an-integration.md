---
title: Add an integration
excerpt: Connect a supported data source, verify access, and begin importing inventory.
deprecated: false
hidden: false
metadata:
  title: Add an integration | WanAware Documentation
  description: Add a supported integration to WanAware, test it, and begin the first data collection.
  keywords:
    - add integration
    - connect data source
    - test connection
    - import inventory
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: ADMINISTRATION, INTEGRATIONS
product-area: Integrations
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: integrations-add
video-status: planned
release-status: draft
-->

# Add an integration

**Outcome:** Connect and test a supported data source, then begin its first inventory collection.

**For:** Customer administrators and source-system owners
**Permission:** Administration and Integrations
**Time:** About 10–20 minutes, plus provider setup and processing time
**Changes made:** Saves a connection in WanAware; the selected provider may require source-side changes

## Before you start

- Get approval from the source-system owner.
- Open the matching [provider adapter](providers) and confirm its requirements.
- Gather the non-secret account identifiers requested by the released form.
- Use the least access supported by the provider.
- Confirm which WanAware company workspace should receive the inventory.

Only enter an authorization value in a field that the released setup explicitly identifies for that purpose. Never send that value to Support or include it in a screenshot.

## Add the integration

1. Open **Administration → Integrations**.
2. Find the provider you want to connect.
3. Expand its card.
4. Select the available connect or add action.
5. Enter a clear, unique connection name.
6. Complete the fields described by the provider adapter.
7. Review any permissions and source-side resources that the setup will create.
8. Save the integration.

**Expected result:** The connection appears on the provider card. Status wording varies by provider.

If a required field is unclear, stop and check the provider adapter. Do not guess an identifier or paste a secret into a general text field.

## Test and collect

1. Select **Test connection** when that action is available.
2. Wait for a successful test before starting collection.
3. Select the provider's available collection or refresh action.
4. Wait for the request confirmation.

**Expected result:** WanAware accepts the collection request. Inventory collection can continue after you leave the page.

If the test or request fails, use [Integration connection failures](../troubleshooting-and-support/integration-connection-failures).

## Check your result

1. Wait for the collection to finish.
2. Open **Functions → Assets → Inventory**.
3. Clear filters and search for a known source record.
4. Open it and confirm its name, Asset Type, provider, and source account context.

The integration is verified only when a known record appears with the expected source context.

## Undo this change

Removing an integration stops future collection but may not remove imported assets or source-side resources.

1. Review the connection's current inventory use.
2. Use the available disable or remove action only after approval.
3. Follow the provider adapter's source-side cleanup guidance.
4. Verify that no expected refresh is still scheduled.

## Learn, show me, do it

- **Learn:** [About integrations](about-integrations)
- **Show me:** The captioned integration clip will be embedded after its Harbor Meridian Systems recording passes review.
- **Do it:** Open `/administration/integrations` in your WanAware workspace.

## Next steps

- [Refresh integration data](refresh-integration-data)
- [Verify imported inventory](verify-imported-inventory)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20integration%20help) with your company, affected user, provider, integration name or ID, failed stage, page URL, timestamp and time zone, reproduction steps, and exact error text. Never send passwords, credentials, tokens, private keys, or secret values.
