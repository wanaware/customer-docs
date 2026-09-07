---
title: Use a shared evaluation workspace safely
excerpt: Explore a trial, sandbox, or shared evaluation workspace without disrupting data, access, configuration, or billing.
deprecated: false
hidden: false
metadata:
  title: Use a shared WanAware workspace safely | WanAware Documentation
  description: Learn what to view, change, avoid, and recover in a shared WanAware trial, sandbox, or evaluation workspace.
  keywords:
    - evaluation workspace guide
    - sandbox safety
    - what can I change
    - trial
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer
permission: exact action resource permission required by the selected task
product-area: Platform
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: start-demo-safety
video-status: planned
release-status: draft
-->

**Outcome:** Explore the product and create approved test records without disrupting a shared workspace.

**For:** Anyone using a shared trial, sandbox, or evaluation workspace
**Permission:** Use the exact `action resource` permission required by the task you choose
**Time:** 5 minutes
**Changes made:** None unless you choose a write action

## If you're stuck

- Stop before a second write action; repeated changes make recovery harder.
- Record the current page URL, record ID, action, timestamp, and time zone.
- Use only the verified undo instructions in the matching task guide.

## Before you start

- Confirm that you are in the intended company workspace.
- Ask the workspace owner to approve sanitized test information before use.
- Give temporary records a clear prefix your team recognizes, such as `Test`.
- Keep a list of anything you create so it can be reviewed and removed safely.

## Action-safety guide

| Action type | Examples | Safe default |
| --- | --- | --- |
| View-only | Search, filter, open a record, change graph depth | Continue; confirm no save or confirmation appears |
| Shared data change | Create, edit, attach, detach, publish, or delete | Obtain workspace-owner approval and follow the task guide |
| Access change | Invite a user, assign a Role, change Permissions | Verify another administrator remains active |
| Integration or bulk action | Add a connection, start collection, upload a file | Use sanitized input and understand the rollback before submitting |
| Billing action | Change plan, payment method, or subscription state | Obtain billing-owner approval; never perform it for documentation capture |

## Safe read-only actions

1. Search, filter, sort, and paginate tables.
2. Switch among available inventory views.
3. Open assets, Elements, Collections, Structures, Asset Types, and catalog entries.
4. Explore a Relationship Graph and change its visual filters or depth.
5. Review company, role, usage, and subscription information already visible to you.

**Expected result:** Your exploration does not create a save confirmation, unsaved-change bar, invitation, import job, or billing action.

![Launchpad showing example workspace summaries, available widgets, and links into detailed product areas.](https://files.readme.io/4110fc0e44ac5a1c2e80f05909c954f86f11daaa682ef188a05aaa43d3117d03-launchpad-overview.png)

## Ask before making these changes

- Create, edit, attach, detach, publish, hide, restore, or delete a shared record
- Add, test, refresh, disable, or remove an integration
- Run a bulk import
- Invite a member or change a role
- Change company settings
- Change a plan, payment method, or subscription state

Never enter production credentials, passwords, tokens, private keys, real customer data, unnecessary personal information, or payment details.

## Recover from an accidental change

1. Stop before making another change.
2. Record the page URL, record name or ID, action, timestamp, and time zone.
3. Use a verified undo or detach action once when the result is clear.
4. Do not delete other records to hide the change.
5. Contact Support if the impact is uncertain.

## Check your result

Continue after you can identify the read-only actions and the actions that require approval. Record how to remove every temporary record you create.

## Learn and continue

- **Learn:** [Product map and terminology](https://docs.wanaware.com/docs/product-map-and-terminology)
- **In WanAware:** Open `/launchpad` and follow [Your first 30 minutes](https://docs.wanaware.com/docs/your-first-30-minutes).

## Next steps

- [Your first 30 minutes](https://docs.wanaware.com/docs/your-first-30-minutes)
- [Administrator setup path](https://docs.wanaware.com/docs/administrator-setup-path)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Accidental%20change%20in%20a%20WanAware%20workspace) and include:

- Company, affected user, page URL, timestamp, and time zone
- Record ID and the action taken
- Screenshot or exact message and expected versus actual behavior

Never send passwords, credentials, tokens, payment details, or secret values.
