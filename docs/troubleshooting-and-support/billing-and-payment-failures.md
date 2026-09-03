---
title: Billing and payment failures
excerpt: Diagnose missing billing access, unsuccessful payment actions, invoice problems, and unclear subscription state.
deprecated: false
hidden: false
metadata:
  title: Billing and payment failures | WanAware Documentation
  description: Troubleshoot WanAware plan, usage, payment, invoice, and subscription issues safely.
  keywords:
    - billing failed
    - payment failed
    - invoice missing
    - plan change failed
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer administrator, billing administrator
permission: read billing, read billing_history, read my_subscriptions, read payment_methods
product-area: Billing
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: troubleshoot-billing
video-status: not-planned
release-status: draft
-->

# Billing and payment failures

Use this page when Billing is missing, a payment or plan action fails, an invoice is unavailable, or the displayed subscription state is unclear.

## Fast checks

1. Confirm the company workspace and billing role.
2. Refresh once and reopen **Administration → Billing**.
3. Check **Plans**, **Payment & Billing**, and **Billing History** for the current state.
4. Confirm the billing address and masked payment method are current without copying full details.
5. Check whether the action already produced a confirmation before repeating it.
6. Record the exact message and timestamp.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Billing is missing | The role lacks Billing access | Ask a company administrator to review the billing permission. |
| Payment action fails | Payment details, authorization, or provider processing failed | Review the displayed reason and have the billing owner correct only the named issue. |
| Plan change does not complete | Approval, payment, or request processing is incomplete | Check for a confirmation and current plan before retrying. |
| Invoice is missing | Wrong company, date range, or billing account | Confirm the company and search Billing History for the expected period. |
| Usage looks wrong | Time period, scope, or recent processing differs | Confirm the displayed period and record the affected usage line. |
| Cancellation state is unclear | The change has a future effective date or did not complete | Do not repeat cancellation; contact Support with the confirmation and timestamp. |

## Verify the fix

Reopen the relevant billing tab and confirm the current plan, status, usage, masked payment state, or invoice reference. Keep approved confirmations according to company policy.

## Known limitations

Support cannot accept full payment details by email. Some changes have future effective dates or are not immediately reversible. Do not run a purchase or cancellation as a test.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20billing%20or%20payment%20failure) with your company, affected user, billing tab, sanitized invoice or transaction reference, page URL, timestamp and time zone, expected versus actual result, and exact error. Never send full payment details, passwords, credentials, invoices with private data, tokens, or secret values.
