---
title: Manage payment methods
excerpt: Add, update, or remove a payment method and verify the masked result.
deprecated: false
hidden: false
metadata:
  title: Manage payment methods | WanAware Documentation
  description: Manage masked payment methods and billing contact information in WanAware.
  keywords:
    - add payment method
    - update payment method
    - billing email
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: billing administrator
permission: read billing, read billing_history, read my_subscriptions, read payment_methods; update payment_methods for changes
product-area: Billing
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: billing-payment-methods
video-status: not-planned
release-status: draft
-->

# Manage payment methods

**Outcome:** Add, update, or remove an authorized payment method and confirm only its masked details are displayed.

**For:** Billing administrators
**Permission:** Billing navigation requires all four read permissions; changes require `update payment_methods`
**Time:** 5–10 minutes
**Changes made:** Changes how future account charges may be paid

## If you're stuck

- Confirm **Payment & Billing** is selected, not **Billing History**.
- **Billing Email** is required; correct it before resubmitting.
- If a submission result is uncertain, do not submit again. Refresh and inspect the masked payment-method list first.

## Before you start

Obtain approval from the billing owner. Never enter real payment details to create documentation or a test screenshot.

## Field and option guide

| UI label | Purpose | Required or expected value | Where it appears later |
| --- | --- | --- | --- |
| **Billing Email** | Receives billing communication | Valid billing-owner email; required | Billing information |
| **Payment Methods** | Lists stored methods | Masked brand and final digits only | **Payment & Billing** |
| **Add Payment Method** | Opens the secure payment form | Authorized payment details | Payment-method list after save |
| **View details** | Opens the selected stored method | Existing masked method | Payment-method details |

## Add or update a payment method

1. Open **Administration → Billing → Payment & Billing**.
2. Confirm **Billing Email** belongs to the authorized billing contact.
3. To add a method, select **Add Payment Method**. To inspect an existing method, select **View details**.
4. Enter or update only the requested billing fields.
5. Review the company and masked result before saving.
6. Submit once and wait for the success message.

**Expected result:** WanAware reports that the payment method or billing information was saved, and the list shows masked details rather than the full account number.

If the form says **Billing Email is required**, enter a valid billing email and submit again. For another validation error, correct the named field only; repeated submissions can make the final state harder to determine.

## Verify

Refresh **Payment & Billing**, reopen **View details**, and confirm the expected masked method and Billing Email. Do not rely only on the toast message.

## Undo this change

Restore the prior billing contact or approved method and verify again. Removing a payment method can affect renewal; do not remove the only method unless the product confirmation and your billing policy permit it.

## Learn, show me, do it

- **Learn:** [Understand billing](understand-billing)
- **Show me:** Billing visuals use masked test data and will be added after privacy review.
- **Do it:** Open `/administration/billing` in your WanAware workspace and select **Payment & Billing**.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20payment%20method%20help) with your company, affected user, masked method brand and final digits, page URL, timestamp and time zone, reproduction steps, and exact error. Never send full card or bank details, security codes, passwords, credentials, or tokens.
