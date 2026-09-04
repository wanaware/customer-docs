---
title: Manage your profile and security
excerpt: Update your personal profile and use the released security settings for your account.
deprecated: false
hidden: false
metadata:
  title: Manage your profile and security | WanAware Documentation
  description: Update WanAware profile information and personal security settings.
  keywords:
    - profile settings
    - security settings
    - MFA
    - password
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer
permission: view my_profile_general and view my_profile_security; update the matching resource for changes
product-area: Profile and security
content-owner: Product
review-owner: Support
last-verified: 2026-09-03
last-verified-release: pending
screenshot-set: personal-profile-security
video-status: not-planned
release-status: draft
-->

**Outcome:** Update a personal profile or security setting and verify that your account remains accessible.

**For:** Signed-in WanAware members
**Permission:** `view my_profile_general` or `view my_profile_security`; the matching `update` permission for changes
**Time:** 5–10 minutes
**Changes made:** Changes your own account information or sign-in security

## If you're stuck

- Use **General** for your name, time zone, time format, date format, and avatar. Your email address is read-only.
- Use **Security** for two-factor authentication and password actions.
- If a verification code fails, correct device time and use the newest code.
- Keep the current session open until a second sign-in test succeeds.

## Before you start

- Confirm you are signed in as the intended user.
- Keep access to your current sign-in method.
- If your company uses an external identity provider, it may manage your password and two-factor authentication outside WanAware.
- Never share a password, recovery code, or MFA code with Support.

## Field and option guide

| UI item | Purpose | Required state or accepted value | Where the value appears |
| --- | --- | --- | --- |
| **Full Name** | Sets your displayed name | Required | Profile details and other places that identify your account |
| **Email** | Identifies your account and sign-in address | Read-only on this page | Profile details and sign-in flows |
| **Timezone** | Controls the time zone used for displayed dates and times | Select one listed time zone | Time-based values throughout your workspace |
| **12 Hour** or **24 Hour** | Controls the displayed time format | Select one | Time-based values throughout your workspace |
| **Date** or **ISO** | Controls the displayed date format | Select one | Date-based values throughout your workspace |
| **Change avatar** | Replaces your profile image | JPG, GIF, or PNG; maximum 1 MB | Your profile menu and profile details |
| **Current Password** | Confirms that you can change the current password | Your current WanAware password | Used only during the password change |
| **New Password** | Sets the replacement password | At least 12 characters with uppercase, lowercase, digit, and special characters | Your next password-based sign-in |
| **Confirm New Password** | Prevents password entry mistakes | Must exactly match **New Password** | Used only during the password change |
| **Authenticator App** | Adds an app-based second factor | Current six-digit code from a supported authenticator | Required during sign-in after enrollment |
| **Recovery Codes** | Provides one-time access if the authenticator is unavailable | Store each code securely; each code works once | Two-factor recovery during sign-in |

## Update your profile

1. Open your profile menu.
2. Select **General**.
3. Change **Full Name**, **Timezone**, the time format, or the date format.
4. To change your avatar, select **Change avatar** and choose a supported image no larger than 1 MB.
5. Select **Save**.

**Expected result:** WanAware displays **Profile updated successfully**.

6. Refresh **General** and confirm that each saved value remains selected.

Your email address is read-only. Contact your administrator if the displayed address is wrong.

If **Change avatar** is absent, your identity provider manages the profile image.

## Change your password

This option appears only when WanAware manages your password.

1. Open your profile menu and select **Security**.
2. In **Change Password**, enter your **Current Password**.
3. Enter a **New Password** with at least 12 characters.
4. Include at least one uppercase letter, one lowercase letter, one digit, and one special character.
5. Enter the same value in **Confirm New Password**.
6. Confirm that the page displays **New Password Meets Password Requirements**.
7. Select **Change Password**.

**Expected result:** WanAware accepts the change without displaying an error.

If the page says you used the password before, choose a password you have not used for this account.

If the change fails, re-enter **Current Password** and check both new-password fields for a mismatch.

## Enable two-factor authentication

If **Security** says to set up two-factor authentication during sign-in, your identity provider owns this workflow. Sign out only after confirming that you can complete its next sign-in flow.

When WanAware displays **Enable**:

1. Open your profile menu and select **Security**.
2. Under **Two-Factor Authentication**, find **Authenticator App**.
3. Select **Enable**.
4. Select **Get started**.
5. In Google Authenticator, Microsoft Authenticator, Duo, or another compatible app, add an account by scanning the QR code.
6. Enter the current six-digit code from the authenticator app.
7. Continue to **Recovery Codes**.
8. Select **Copy** or **Download**, then store the codes in a secure location.
9. Select **I have saved these codes securely** to finish enrollment.

**Expected result:** **Authenticator App** displays **Enabled - Your account is protected**.

If a code does not work, confirm that the device clock is automatic. Wait for a new code, then enter it once.

Do not scan the QR code into more than one account in the same authenticator app. Confirm the WanAware account label before entering a code.

## Regenerate recovery codes

Regeneration invalidates the previous recovery-code set.

1. Open **Security**.
2. Find **Recovery Codes**.
3. Select **Regenerate**.
4. Select **Copy** or **Download** and store the new codes securely.
5. Remove the old codes from your password manager or secure storage.

**Expected result:** WanAware displays **Recovery codes regenerated** and shows the new set.

## Disable two-factor authentication

Disable two-factor authentication only when your company policy allows it.

1. Open **Security**.
2. Under **Authenticator App**, select **Disable**.
3. Review the **Disable Two-Factor Authentication?** confirmation.
4. Confirm the action.

**Expected result:** **Authenticator App** displays **Not enabled - Protect your account with 2FA**.

If **Disable** is unavailable, your organization requires MFA. Ask an administrator about the applicable policy.

## Check your result

Open a private browser session and sign in with the updated password or authenticator. Keep the original session open until this test succeeds.

If the new sign-in fails, return to the original session and review [Sign-in, password, and MFA problems](https://docs.wanaware.com/docs/sign-in-password-and-mfa).

## Undo this change

Restore an editable profile value through **General**.

You cannot recover a previous password or recovery-code set. If you lose every working sign-in method, contact Support from a trusted company address.

## Learn and continue

- **Learn:** [Understand Roles and Permissions](https://docs.wanaware.com/docs/understand-roles-and-permissions)
- **In WanAware:** Open `/profile/general` or `/profile/security` in your WanAware workspace.

## Next steps

- [Choose a theme](https://docs.wanaware.com/docs/choose-a-theme)
- [Fix sign-in, password, or MFA problems](https://docs.wanaware.com/docs/sign-in-password-and-mfa)

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20profile%20or%20security%20help) with your company, affected user email, page URL, timestamp and time zone, attempted action, and exact error. Never send passwords, MFA codes, recovery codes, invitation tokens, credentials, or access tokens.
