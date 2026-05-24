import { MOCK_SESSIONS } from "./sessions";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const randomStr = (len) =>
  Array.from({ length: len })
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");

const EVENT_TYPES = [
  "tab_switch",
  "fullscreen_exit",
  "focus_loss",
  "reconnect",
  "inactivity_warning",
  "network_interruption",
];

const DESCRIPTIONS = {
  tab_switch: "User switched to another browser tab",
  fullscreen_exit: "Candidate exited fullscreen mode",
  focus_loss: "Browser window lost focus",
  reconnect: "Candidate reconnected after connection drop",
  inactivity_warning: "No activity detected for 2 minutes",
  network_interruption: "Network connection was interrupted",
};

export const MOCK_EVENTS = {};

MOCK_SESSIONS.forEach((session) => {
  const events = [];
  const eventCount = Math.floor(Math.random() * (20 - 4 + 1)) + 4; // random 4 to 20

  const typeCounts = {
    tab_switch: 0,
    fullscreen_exit: 0,
    focus_loss: 0,
  };

  const startMs = new Date(session.startedAt).getTime();
  const endMs = new Date(session.lastActivityAt).getTime();

  for (let i = 0; i < eventCount; i++) {
    const type = EVENT_TYPES[Math.floor(Math.random() * EVENT_TYPES.length)];
    let severity = "info";

    if (type === "reconnect" || type === "inactivity_warning") {
      severity = "warning";
    } else if (type === "network_interruption") {
      severity = "critical";
    } else {
      typeCounts[type]++;
      if (typeCounts[type] >= 3) {
        severity = "critical";
      } else {
        severity = "warning";
      }
    }

    const eventTimeMs = startMs + Math.random() * (endMs - startMs);

    events.push({
      id: "evt_" + randomStr(8),
      sessionId: session.id,
      type,
      severity,
      description: DESCRIPTIONS[type],
      occurredAt: new Date(eventTimeMs).toISOString(),
      metadata: null,
    });
  }

  events.sort(
    (a, b) => new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime()
  );
  MOCK_EVENTS[session.id] = events;
});
