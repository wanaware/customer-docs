---
title: Investigate with Observability and Pulse
excerpt: Move from a monitor result to diagnostic evidence, affected resources, and a recommended next action.
deprecated: false
hidden: false
metadata:
  title: Investigate with Observability and Pulse | WanAware Documentation
  description: Review WanAware monitoring state and use Pulse diagnostic runs to investigate a problem.
  keywords:
    - Observability
    - Pulse diagnosis
    - root cause
    - monitor result
    - diagnostic evidence
  robots: index
---

<!-- kb-meta
content-type: workflow
audience: customer engineer, support
permission: OBSERVABILITY, PULSE
product-area: Pulse
content-owner: Product
review-owner: Support
last-verified: pending
-->

# Investigate with Observability and Pulse

**Outcome:** Open a monitor result, review its Pulse diagnosis, and identify the next evidence-backed action.

**For:** Customer engineers and support staff
**Permission:** Observability; Pulse for diagnostic content
**Time:** 5–15 minutes
**Changes made:** None unless you pause, resume, or edit monitoring

## Start from Observability

1. Open **Functions → Observability → Inventory**.
2. Choose the correct scope: asset, Site, Element, or Collection when available.
3. Search for the affected resource.
4. Open the monitor and review its latest status and result.
5. Record the monitor ID and result timestamp before changing configuration.

**Expected result:** You can tell whether the monitor is configured, active, and producing current data.

## Review Pulse diagnostics

1. Open **Pulse diagnosis** from the monitor when it is available, or open **Pulse** and select the relevant execution.
2. Confirm the execution status: running, completed, or failed.
3. Review the **Operator answer** and supporting evidence.
4. Follow the **Diagnostic path** to understand how the conclusion was reached.
5. Review **Pattern detected**, affected entities, and the relationship graph when present.
6. Treat **Recommended action** as guidance to verify, not an automatic change.

**Expected result:** You can connect the monitor evidence to an affected asset and explain the recommended next check.

## Check your result

Before acting, confirm that the execution and monitor refer to the expected company, asset, time range, and target. Compare the evidence with the asset's current relationship context.

## When Pulse has no answer

- **Pulse hasn't analyzed this monitor yet:** Wait for an eligible run and confirm that Pulse access is enabled.
- **Pulse hasn't produced a root cause:** Use the monitor evidence and relationship graph; an incomplete diagnosis is not proof that nothing is wrong.
- **Pulse access required:** Ask a customer administrator to review your role.
- **Pulse unavailable or failed:** Refresh once, then follow [Missing Observability or Pulse data](../troubleshooting-and-support/missing-observability-or-pulse-data).

## Learn, show me, do it

- **Learn:** [Relationship Discovery Engine](../assets-and-relationships/relationship-discovery-engine)
- **Show me:** The Loom recording **Configure monitoring and investigate a result** will be embedded here after approval.
- **Do it:** Open `/observability/inventory` or `/pulse` in your WanAware workspace.

## Get help

Email [support@wanaware.com](mailto:support@wanaware.com?subject=Help%20with%20WanAware%20Observability%20or%20Pulse) with your company, monitor and execution IDs, asset ID, result timestamp and time zone, page URL, expected and actual behavior, and a screenshot. Never send monitoring credentials, tokens, or secrets.
