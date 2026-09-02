# Configure monitoring and investigate a result

**Target length:** 2 minutes 45 seconds
**Embed in:** `/docs/configure-a-monitor-and-worker` and `/docs/investigate-with-observability-and-pulse`
**Audience:** Operators with Observability access

## Before recording

- Use fictional, non-customer targets that are approved for demonstration.
- Use a role with the required Observability and Worker permissions.
- Confirm an appropriate Worker group is online before recording.
- Never reveal monitoring credentials, community strings, keys, tokens, or private addresses.

## Shot list and narration

| Time | On screen | Narration and captions |
| --- | --- | --- |
| 0:00–0:18 | Observability inventory | This walkthrough creates a monitor, confirms that a Worker can run it, and follows one result into an investigation. An Observability subscription and the correct permissions are required. |
| 0:18–0:42 | Add Monitor, Asset step | Choose Add Monitor. In the Asset step, select the fictional asset you want to observe. Confirm its identity before continuing. |
| 0:42–1:02 | Monitor type step | Choose Availability, Performance, or Security according to the outcome you need. For this example, select Availability. |
| 1:02–1:28 | Target and Configure steps | Choose the approved target and an online Worker group, then set the released configuration fields. Review the interval and target carefully before saving because the monitor will begin producing results. |
| 1:28–1:46 | Monitor status | Save the monitor and verify that it appears with the expected status. If it does not run, check the Worker group, subscription, permissions, target, and duplicate-monitor warning. |
| 1:46–2:12 | Latest Observability result | Open a recent result in Observability. Confirm the asset, monitor type, timestamp, time zone, status, and selected time range before comparing results. |
| 2:12–2:32 | Pulse result | When Pulse is available, open it for additional context. Review the diagnosis, diagnostic path, detected pattern, recommended action, and execution status. Treat a recommendation as evidence to verify, not as an automatic change. |
| 2:32–2:45 | Support footer | The written articles contain exact recovery checks. When escalating, send identifiers and timestamps, never monitoring credentials or secret values. |

## Transcript

This walkthrough creates a monitor, confirms that a Worker can run it, and follows one result into an investigation. An Observability subscription and the correct permissions are required.

Choose Add Monitor. In the Asset step, select the fictional asset you want to observe. Confirm its identity before continuing.

Choose Availability, Performance, or Security according to the outcome you need. For this example, select Availability.

Choose the approved target and an online Worker group, then set the released configuration fields. Review the interval and target carefully before saving because the monitor will begin producing results.

Save the monitor and verify that it appears with the expected status. If it does not run, check the Worker group, subscription, permissions, target, and duplicate-monitor warning.

Open a recent result in Observability. Confirm the asset, monitor type, timestamp, time zone, status, and selected time range before comparing results.

When Pulse is available, open it for additional context. Review the diagnosis, diagnostic path, detected pattern, recommended action, and execution status. Treat a recommendation as evidence to verify, not as an automatic change.

The written articles contain exact recovery checks. When escalating, send identifiers and timestamps, never monitoring credentials or secret values.
