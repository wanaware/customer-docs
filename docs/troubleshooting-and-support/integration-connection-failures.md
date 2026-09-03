---
title: Integration connection failures
excerpt: Diagnose setup, authorization, connection-test, and data-collection failures for supported integrations.
deprecated: false
hidden: false
metadata:
  title: Integration connection failures | WanAware Documentation
  description: Fix WanAware integration setup, authorization, connection-test, and collection errors.
  keywords:
    - integration failed
    - test connection failed
    - data collection failed
    - sync failed
    - inventory collection failed
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer administrator
permission: read integrations; create integrations or update integrations for the failed action
product-area: Integrations
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-integrations
video-status: not-planned
release-status: draft
-->

# Integration connection failures

Use these checks when WanAware cannot start provider setup, save an integration, verify access, or collect data.

## Fast checks

1. Confirm that you are connecting the intended provider account to the correct WanAware company.
2. Recheck the account identifier and every required setup value.
3. Confirm that the provider-side authorization or deployment finished successfully.
4. Make sure the saved identity and trust values belong to the same provider account.
5. Select **Test connection** before starting data collection when that action is available.
6. If a setup or authorization link expired, restart that part of the setup instead of reusing the old URL.

## Common causes and fixes

| Message or symptom | Likely cause | What to do |
| --- | --- | --- |
| Provider setup does not start | Invalid account details, an expired setup session, or a temporary service failure | Recheck the account name and identifier, restart setup, then retry once. |
| Provider authorization or deployment fails | Your provider user lacks permission, approval is required, or a conflicting resource exists | Review the provider's error with the source account owner and resolve the named permission or resource problem. |
| Integration will not save | A required value is missing, invalid, or from a different setup attempt | Return to the setup step and compare every saved value with the current provider configuration. |
| **Test connection** fails | The authorization, trust settings, network access, or provider permissions do not match | Correct the provider-side configuration, then test again. |
| Collection will not start | The connection is not verified or collection is temporarily unavailable | Test the connection, wait briefly, and submit the request once more. |
| Collection finishes but no assets appear | Processing is still running, the source returned no supported resources, or filters hide the results | Allow processing time, refresh Assets, then search both Inventory and Discovery without filters. |

Use the matching [provider adapter](../integrations/providers) for provider-specific fields, authorization, and source-side checks.

## Verify the fix

The integration should show a connected or ready status, its connection test should pass, and a known source resource should appear after collection finishes.

## Known limitations

WanAware cannot override a provider permission boundary, organization policy, approval requirement, or network restriction. Work with the source account owner when the provider reports one of these restrictions.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20integration%20failure) with your company, affected user, provider, integration or account identifier, failed stage, provider-side status, page URL, reproduction steps, timestamp and time zone, expected result, and exact error text. Never send passwords, access keys, secret keys, session tokens, private keys, or secret values.
