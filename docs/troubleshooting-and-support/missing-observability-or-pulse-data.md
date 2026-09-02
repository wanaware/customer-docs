---
title: Missing Observability or Pulse data
excerpt: Separate permission, timing, monitor, and diagnostic-state problems when results or Pulse evidence are absent.
deprecated: false
hidden: false
metadata:
  title: Missing Observability or Pulse data | WanAware Documentation
  description: Troubleshoot missing WanAware Observability results and Pulse diagnostic executions.
  keywords:
    - Observability data missing
    - Pulse unavailable
    - Pulse no root cause
    - monitor result missing
    - execution failed
  robots: index
---

<!-- kb-meta
content-type: troubleshooting
audience: customer engineer, support
permission: OBSERVABILITY, PULSE
product-area: Pulse
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Missing Observability or Pulse data

First determine whether the monitor result is missing, the Pulse execution is missing, or Pulse completed without a root cause. These are different states.

## Fast checks

1. Confirm the company, resource, monitor, and time range.
2. Clear inventory and Pulse filters.
3. Confirm that the monitor is active and producing current results.
4. Confirm that the user has Pulse permission.
5. Check the Pulse execution status: running, completed, failed, or absent.
6. Refresh once after recording the current timestamps.

## Common causes and fixes

| Symptom | Likely cause | What to do |
| --- | --- | --- |
| No Observability result | Monitor or Worker is not running | Follow [Monitors or Workers not running](monitors-or-workers-not-running). |
| **Pulse access required** | Role lacks Pulse permission | Ask a customer administrator to review the role. |
| **Pulse hasn't analyzed this monitor yet** | No eligible diagnostic execution exists | Confirm monitor activity and wait for a supported Pulse run. |
| Execution is running | Diagnostic work is still in progress | Wait for completion instead of starting duplicate investigations. |
| Execution failed or Pulse is unavailable | Temporary or execution-specific failure | Retry only when the UI provides a supported retry, then record the execution ID. |
| **Pulse hasn't produced a root cause** | Evidence was insufficient for a supported conclusion | Use the available monitor evidence and asset relationships; do not treat it as an all-clear. |
| Result appears under another resource | Scope or relationship context differs | Confirm the asset, Site, Element, or Collection used by the monitor. |

## Verify the fix

Confirm a current monitor result and, when applicable, a Pulse execution whose resource, target, and time match that result.

## Known limitations

Pulse may not produce a root cause for every execution. The absence of a root cause is a diagnostic outcome, not proof that the monitored service is healthy.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Missing%20WanAware%20Observability%20or%20Pulse%20data) with your company, asset and monitor IDs, Pulse execution ID, statuses, result time and time zone, page URL, selected scope and filters, and a screenshot. Never send monitoring credentials, tokens, or secrets.
