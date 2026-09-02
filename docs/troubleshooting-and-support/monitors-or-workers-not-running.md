---
title: Monitors or Workers not running
excerpt: Check subscription, monitor state, target, Worker assignment, and recent results before recreating monitoring.
deprecated: false
hidden: false
metadata:
  title: Monitors or Workers not running | WanAware Documentation
  description: Troubleshoot WanAware monitors and Workers that are paused, unavailable, unassigned, or not producing results.
  keywords:
    - monitor not running
    - Worker unavailable
    - no monitor result
    - paused monitor
    - target not found
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer administrator, engineer
permission: OBSERVABILITY, WORKERS
product-area: Observability
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Monitors or Workers not running

Do not delete and recreate monitoring until you have recorded the existing IDs and checked the assignment.

## Fast checks

1. Confirm an active Observability subscription.
2. Check whether the monitor is paused.
3. Confirm the target IP or hostname still belongs to the selected asset.
4. Confirm that a Worker group is assigned.
5. Open **Functions → Workers** and check the group and node status.
6. Wait at least one configured interval after a new monitor or Worker change.
7. Refresh once and record the latest result time.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| Monitor is paused | It was paused individually or through a selected scope | Resume it only after confirming why it was paused. |
| Target or Worker group not found | The selected record changed or was removed | Reopen configuration and choose a current target and Worker group. |
| Worker service is temporarily unavailable | Temporary service failure | Wait briefly and retry once; preserve the existing monitor. |
| No result after creation | The first interval has not elapsed or the Worker cannot reach the target | Wait for the interval, then verify network reachability from the selected Worker. |
| Duplicate monitor error | The same configuration already exists | Find and use the existing monitor instead of creating another. |
| Worker is unavailable | Node, group, deployment, or connectivity problem | Record the Worker group and node status and escalate without deleting it. |

## Verify the fix

The monitor should be active, show the intended target and Worker group, and produce a result with a current timestamp.

## Known limitations

A healthy Worker does not prove that every target is reachable. Network policy between the Worker and target may still block the selected protocol.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=WanAware%20monitor%20or%20Worker%20not%20running) with your company, monitor ID and type, target, Worker group and node IDs, current statuses, configured interval, latest result time and time zone, page URL, and exact error. Never send monitoring credentials, SNMP secrets, access tokens, or private keys.
