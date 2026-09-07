---
title: A page or action is missing
excerpt: Determine whether a missing feature is caused by role access, company context, subscription, or product availability.
deprecated: false
hidden: false
metadata:
  title: A page or action is missing | WanAware Documentation
  description: Troubleshoot missing WanAware navigation, buttons, actions, and permission errors.
  keywords:
    - missing page
    - missing button
    - permission denied
    - 403
    - role access
    - feature not visible
    - cannot see page
    - cannot see action
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer
permission: none
product-area: IAM
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: troubleshoot-permissions
video-status: not-planned
release-status: draft
-->

WanAware hides navigation and actions that are not available to the current Role. A missing button is often an access or subscription question, not a loading failure.

## Fast checks

1. Confirm the company workspace shown in WanAware.
2. Refresh once after a role or subscription change.
3. Find the area in the [navigation and permission map](https://docs.wanaware.com/docs/product-map-and-terminology#navigation-and-permission-map). If more than one permission is listed, your Role needs all of them.
4. Ask a customer administrator to compare your active Roles with a user who can complete the task.
5. Confirm that the feature is included in the company's active subscription.
6. Check whether the instructions apply to the released Portal version.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| A navigation item is missing | The Role lacks the navigation requirement | Ask an administrator to review the Role in **Administration → IAM → Roles**. |
| The page opens but Add, Edit, or Delete is missing | Navigation access exists without the required action permission | Request the smallest create, update, or delete Permission needed. |
| A `403` page appears | The URL is valid, but the user is not authorized | Return to an available page and ask an administrator to review the Role. |
| A billing or subscription message appears | The company plan does not include the requested released area | Ask a billing administrator to confirm the current plan before changing it. |
| The same Role behaves differently in another company | Role assignments and subscriptions differ by organization | Verify the selected workspace and company-specific assignment. |

These navigation requirements do not always match the visible page name:

| Missing area | Exact navigation requirement |
| --- | --- |
| **Launchpad** | `read my_launchpad`, not `view launchpad` |
| **Administration → General** | Both `view general` and `view company_information` |
| **Administration → IAM** | `read users`; the resource is named `users`, not `iam` |
| **Administration → Billing** | All four: `read billing`, `read billing_history`, `read my_subscriptions`, and `read payment_methods` |

The navigation requirement only grants entry to the area. A missing Add, Edit, Delete, Publish, or Attach action can require a separate action permission.

## Verify the fix

Sign out and back in only if the administrator confirms that access changed. Open the exact page and confirm that the required action is available without exposing unrelated administration features.

## Known limitations

Ask the customer's administrator to approve access changes. A screenshot of another user's Role does not replace that approval.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20permission%20help) with your company, affected email address, Role names, missing page or action, page URL, timestamp and time zone, and a screenshot. Do not include session tokens or invitation links.
