import { EVENT_CONFIG } from "../utils/event-config";
import { cn } from "@/lib/utils";

export function TimelineEventIcon({ type }) {
  const config = EVENT_CONFIG[type];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <div className={cn("flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white", config.bg)}>
      <Icon className={cn("h-4 w-4", config.color)} aria-hidden="true" />
    </div>
  );
}
