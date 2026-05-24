const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const randomStr = (len, random = Math.random) =>
  Array.from({ length: len })
    .map(() => chars[Math.floor(random() * chars.length)])
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

const hashString = (value) => {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash || 1;
};

const createSeededRandom = (seedValue) => {
  let seed = hashString(seedValue);

  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
};

export const MOCK_EVENTS = {};

export function makeEventsForSession(session) {
  if (!session?.id) return [];

  const random = createSeededRandom(session.id);
  const events = [];
  const extraEventCount = Math.floor(random() * 7) + 4;

  const typeCounts = {
    tab_switch: 0,
    fullscreen_exit: 0,
    focus_loss: 0,
  };

  const startMs = new Date(session.startedAt).getTime();
  const endMs = new Date(session.lastActivityAt).getTime();
  const durationMs = Math.max(endMs - startMs, EVENT_TYPES.length * 60 * 1000);
  const totalEvents = [
    ...EVENT_TYPES,
    ...Array.from({ length: extraEventCount }, () =>
      EVENT_TYPES[Math.floor(random() * EVENT_TYPES.length)]
    ),
  ];

  totalEvents.forEach((type, index) => {
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

    const eventTimeMs =
      startMs +
      Math.min(
        durationMs - 1000,
        ((index + 1) / (totalEvents.length + 1)) * durationMs +
          random() * 90 * 1000
      );

    events.push({
      id: "evt_" + randomStr(8, random),
      sessionId: session.id,
      type,
      severity,
      description: DESCRIPTIONS[type],
      occurredAt: new Date(eventTimeMs).toISOString(),
      metadata: null,
    });
  });

  events.sort(
    (a, b) => new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime()
  );

  return events;
}

export function getMockEventsForSession(session) {
  if (!session?.id) return [];

  if (!MOCK_EVENTS[session.id]) {
    MOCK_EVENTS[session.id] = makeEventsForSession(session);
  }

  return MOCK_EVENTS[session.id];
}
