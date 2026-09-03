---
title: View billing history and invoices
excerpt: Find a prior billing event and open its invoice without changing the subscription.
deprecated: false
hidden: false
metadata:
  title: View billing history and invoices | WanAware Documentation
  description: Review WanAware Billing History and open an authorized invoice.
  keywords:
    - billing history
    - view invoice
    - prior charge
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: billing administrator
permission: read billing, read billing_history, read my_subscriptions, read payment_methods
product-area: Billing
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: billing-history
video-status: not-planned
release-status: draft
-->

# View billing history and invoices

**Outcome:** Locate a billing-history entry and open the associated invoice for an authorized business purpose.

**For:** Billing administrators
**Permission:** Billing navigation requires `read billing`, `read billing_history`, `read my_subscriptions`, and `read payment_methods`
**Time:** 2–5 minutes
**Changes made:** None

## If you're stuck

- Confirm you selected **Billing History**.
- Compare the company, date, status, and amount—not only the invoice number.
- If **View Invoice** does not open a document, allow the browser download or new tab only after confirming the item is the intended invoice.

## Before you start

Invoices can contain private company and billing information. Follow your company's storage and sharing policy and redact sensitive values before contacting Support.

## Field and option guide

| UI label | Purpose | What to verify |
| --- | --- | --- |
| **Billing History** | Lists prior billing activity | Company, date, status, and amount |
| **View Invoice** | Opens the invoice attached to an entry | The selected entry is the intended period and charge |

## Find an invoice

1. Open **Administration → Billing → Billing History**.
2. Locate the entry by date, status, and amount.
3. Select **View Invoice** for that entry.
4. Confirm the invoice company and billing period before downloading or sharing it.

**Expected result:** The invoice for the selected history entry opens without changing payment or subscription settings.

## Verify

Match the invoice date and amount to the **Billing History** row you selected. If the row exists but the invoice is missing or mismatched, record the row values and timestamp without sending the full document.

## Learn, show me, do it

- **Learn:** [Understand billing](understand-billing)
- **Show me:** Billing visuals use masked test data and will be added after privacy review.
- **Do it:** Open `/administration/billing` in your WanAware workspace and select **Billing History**.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20invoice%20help) with your company, affected user, billing date, masked invoice reference, page URL, timestamp and time zone, and expected versus actual result. Never send an unredacted invoice, full payment details, passwords, credentials, or tokens.
