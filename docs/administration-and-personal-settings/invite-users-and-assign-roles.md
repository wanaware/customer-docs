---
title: Invite users and assign roles
excerpt: Add a company member and grant only the access required for their work.
deprecated: false
hidden: false
metadata:
  title: Invite users and assign roles | WanAware Documentation
  description: Invite WanAware members, assign roles, and verify their access.
  keywords:
    - invite user
    - IAM
    - assign role
    - member access
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator
permission: USERS_CREATE, ROLES_VIEW
product-area: Administration and access
content-owner: Product
review-owner: Support
last-verified: pending
last-verified-release: pending
screenshot-set: administration-invite-roles
video-status: not-planned
release-status: draft
-->

# Invite users and assign roles

**Outcome:** Invite a company member and assign the smallest role that supports their work.

**For:** Customer administrators
**Permission:** Manage IAM members and view roles
**Time:** About 5 minutes, plus invitation acceptance
**Changes made:** Creates a member and grants access to company data

## Before you start

- Confirm the person's business email and company.
- Choose an existing role based on their responsibilities.
- Review the role's permissions.
- Confirm another administrator will remain active before changing your own access.

## Invite the member

1. Open **Administration → IAM**.
2. Open the member or user list shown in your workspace.
3. Select the available invite action.
4. Enter the person's name and business email.
5. Select the approved role or roles.
6. Review the company and access, then send the invitation.

**Expected result:** The member appears with a pending or invitation status until they accept.

If the email already belongs to a member, update the existing record rather than sending duplicate invitations.

## Verify access

1. Ask the person to use the latest invitation email.
2. Confirm their status becomes active after acceptance.
3. Ask them to sign in and open one page required for their work.
4. Confirm they do not see unrelated administration actions.

If the expected page is missing, use [Missing pages, actions, or permissions](../troubleshooting-and-support/missing-pages-actions-or-permissions).

## Check your result

The member is active in the correct company, has the intended role, can complete their required task, and does not have unnecessary access.

## Undo this change

Use the available invitation cancellation, member deactivation, or role-removal action. Do not share an invitation with a different person. Before removing your own administrator role, verify another active administrator can manage IAM.

## Learn, show me, do it

- **Learn:** [Understand roles and permissions](understand-roles-and-permissions)
- **Show me:** Use the written steps until an access-management clip is approved.
- **Do it:** Open `/administration/iam` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20with%20a%20WanAware%20user%20invitation) with your company, affected user email, invitation status, role names, page URL, timestamp and time zone, and exact error. Never send passwords, MFA codes, invitation tokens, credentials, or access tokens.
