---
title: Invite users and assign roles
excerpt: Add a company member and grant the smallest role that supports their work.
deprecated: false
hidden: false
metadata:
  title: Invite users and assign roles | WanAware Documentation
  description: Invite WanAware members, assign roles, and troubleshoot missing access.
  keywords:
    - invite user
    - IAM
    - role
    - permissions
    - member
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: USERS_CREATE, ROLES_VIEW
product-area: IAM
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Invite users and assign roles

**Outcome:** Invite a company member and assign only the access required for their work.

**For:** Customer administrators
**Permission:** Manage IAM members; view or manage roles as needed
**Time:** 5 minutes, plus invitation acceptance
**Changes made:** Creates a member and grants access to company data

## Before you start

- Confirm the person's business email and company.
- Decide which existing role matches their responsibilities.
- Review the role's permissions before assigning it.
- Do not create a broad administrator role for convenience.

## Invite the member

1. Open **Administration → IAM**.
2. Select **Members** or **Users**, depending on the navigation shown in your account.
3. Select the invite-user action.
4. Enter the person's name and email.
5. Choose one or more approved roles.
6. Review the company and roles, then send the invitation.

**Expected result:** The member appears with an invitation or pending status until they accept.

## Confirm access

1. Ask the person to open the latest invitation email.
2. After acceptance, confirm that their member status is active.
3. Ask them to sign in and verify one page required for their job.

If they can sign in but cannot see the expected page, compare the page's feature permission with the assigned role. See [Missing pages, actions, or permissions](../troubleshooting-and-support/missing-pages-actions-or-permissions).

## Change access safely

- Add a role only after reviewing its effective permissions.
- Remove unnecessary access when responsibilities change.
- Deactivate a member instead of deleting identity history when temporary or reversible removal is appropriate.
- Before removing your own administrator access, confirm that another active administrator can manage IAM.

## Check your result

The member should be active, assigned to the correct company, and able to open the expected page without seeing unrelated administration areas.

## Undo this change

If the wrong email or company was used, stop and correct the member record or deactivate the invitation according to the available IAM action. Do not share the invitation with another person.

## Learn, show me, do it

- **Learn:** [Administration and access](index)
- **Show me:** A user-and-role clip can be added after the five priority workflow recordings.
- **Do it:** Open `/administration/iam` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20with%20a%20WanAware%20user%20invitation) with your company, affected email address, invitation status, assigned role names, timestamp and time zone, page URL, and exact error. Never send passwords, MFA codes, invitation tokens, or access tokens.
