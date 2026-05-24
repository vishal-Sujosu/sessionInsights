import { formatTimestamp } from "@/lib/utils";
import { EVENT_CONFIG } from "../utils/event-config";
import { TimelineEventIcon } from "./timeline-event-icon";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function TimelineItem({ event, isLast }) {
  const config = EVENT_CONFIG[event.type];
  if (!config) return null;

  const formattedTime = new Date(event.occurredAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const relativeTime = formatTimestamp(event.occurredAt);

  return (
    <div className="relative pb-8">
      {!isLast ? (
        <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
      ) : null}
      <div className="relative flex space-x-3">
        <div>
          <TimelineEventIcon type={event.type} />
        </div>
        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-medium text-gray-900">{config.label}</span>
              {event.severity === "warning" && (
                <Badge variant="outline" className="border-amber-500 text-amber-600 bg-amber-50">Warning</Badge>
              )}
              {event.severity === "critical" && (
                <Badge variant="destructive" className="bg-red-500 text-white border-transparent">Critical</Badge>
              )}
            </div>
            <p className={cn("mt-1 text-sm text-gray-700", event.severity === "critical" && "border-l-2 border-red-500 pl-2")}>
              {event.description}
            </p>
          </div>
          <div className="whitespace-nowrap text-right text-xs text-gray-500">
            <div>{formattedTime}</div>
            <div className="text-gray-400 mt-1">{relativeTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
