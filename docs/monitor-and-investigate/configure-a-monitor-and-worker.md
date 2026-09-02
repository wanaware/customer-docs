---
title: Configure a monitor and Worker
excerpt: Choose an asset, monitor type, target, and Worker group, then confirm that monitoring starts.
deprecated: false
hidden: false
metadata:
  title: Configure a monitor and Worker | WanAware Documentation
  description: Create a WanAware availability, performance, or cybersecurity monitor and assign a Worker group.
  keywords:
    - Add Monitor
    - availability monitor
    - performance monitor
    - security monitor
    - Worker group
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer administrator, engineer
permission: OBSERVABILITY_CREATE
product-area: Observability
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Configure a monitor and Worker

**Outcome:** Create one monitor for a known asset and confirm that it has the target and Worker group needed to run.

**For:** Customer administrators and engineers
**Permission:** Create Observability monitors; view Workers
**Time:** 10–15 minutes
**Changes made:** Creates active monitoring work and may consume subscription capacity

## Before you start

- Confirm that the account has an active Observability subscription.
- Choose a known asset with a valid IP or hostname target.
- Confirm which Worker group should run the check.
- Agree on the monitor type, cadence, protocol, and alert thresholds.

## Add the monitor

1. Open **Functions → Observability → Inventory**.
2. Select **Add Monitor**. You can also use an asset-specific add-monitor action when available.
3. In **Asset**, choose the asset to monitor.
4. In **Monitor type**, choose **Availability**, **Performance**, or **Security**.
5. In **Target**, select the intended IP address, hostname, or supported target record.
6. In **Configure**, choose the Worker group and complete the fields for the selected monitor type.
7. Review required fields marked with `*`, then create the monitor.

**Expected result:** WanAware shows **Monitor created.** and returns to the Observability inventory.

## Confirm the Worker assignment

1. Open the new monitor.
2. Confirm that the Worker group is present and appropriate for the target's network location.
3. Open **Functions → Workers** if you need to verify the group or node status.

Do not reassign or delete a shared Worker without checking every attached monitor.

## Check your result

1. Confirm that the monitor appears under the expected asset or scope.
2. Wait for the configured interval.
3. Refresh the monitor and check for a result or a clear running state.

If the monitor already exists for the same configuration, WanAware reports a duplicate. Use the existing monitor instead of creating another one.

## Common blockers

- **Observability Subscription Required:** Add or activate the required plan before creating monitors.
- **You do not have permission to create monitors:** Ask an administrator to review your role.
- **Target or worker group not found:** Recheck both selections; the record may have changed.
- **Worker service is temporarily unavailable:** Wait briefly and retry once.
- **Asset IP configuration is still loading:** Allow it to finish before submitting.

For additional checks, use [Monitors or Workers not running](../troubleshooting-and-support/monitors-or-workers-not-running).

## Undo this change

Pause the monitor before deletion when you are testing behavior. Delete only after confirming that no customer workflow depends on its history or alerts.

## Learn, show me, do it

- **Learn:** [Monitor and investigate](index)
- **Show me:** The Loom recording **Configure monitoring and investigate a result** will be embedded here after approval.
- **Do it:** Open `/observability/inventory` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20creating%20a%20WanAware%20monitor) with your company, asset and monitor IDs, monitor type, target, Worker group name or ID, timestamp and time zone, page URL, and exact error text. Never send SNMP secrets, credentials, access tokens, or private keys.
