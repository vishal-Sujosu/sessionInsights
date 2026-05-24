export const SESSION_STATUS_LABELS = {
  active: "Active",
  completed: "Completed",
  flagged: "Flagged",
  terminated: "Terminated",
};

export const SESSION_STATUS_COLORS = {
  active: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  completed: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  flagged: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  terminated: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export const RISK_LEVEL_LABELS = {
  low: "Low",
  medium: "Medium",
  high: "High",
  critical: "Critical",
};

export const RISK_LEVEL_COLORS = {
  low: "text-green-700 dark:text-green-400",
  medium: "text-yellow-700 dark:text-yellow-400",
  high: "text-orange-700 dark:text-orange-400",
  critical: "text-red-700 dark:text-red-400",
};

export const RISK_THRESHOLDS = {
  critical: 30,
  high: 55,
  medium: 75,
};

export const PAGINATION_DEFAULTS = {
  pageSize: 15,
  pageSizeOptions: [10, 15, 25, 50],
};

export const EVENT_TYPE_LABELS = {
  tab_switch: "Tab Switch",
  fullscreen_exit: "Fullscreen Exit",
  focus_loss: "Focus Loss",
  reconnect: "Reconnect",
  inactivity_warning: "Inactivity Warning",
  network_interruption: "Network Interruption",
};

export const SEVERITY_COLORS = {
  info: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  critical: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};
