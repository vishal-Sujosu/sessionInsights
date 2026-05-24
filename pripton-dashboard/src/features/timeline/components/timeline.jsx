"use client"

import { TimelineItem } from "./timeline-item";

export function Timeline({ events }) {
  if (!events || events.length === 0) {
    return (
      <div className="text-center py-8 text-sm text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-200">
        No events recorded for this session.
      </div>
    );
  }

  return (
    <div className="flow-root mt-4">
      <ul role="list" className="-mb-8">
        {events.map((event, eventIdx) => (
          <li key={event.id}>
            <TimelineItem event={event} isLast={eventIdx === events.length - 1} />
          </li>
        ))}
      </ul>
    </div>
  );
}
