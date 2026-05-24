import { ArrowLeftRight, Minimize2, EyeOff, WifiOff, RefreshCw, Clock, Play, Square } from "lucide-react"

export const EVENT_CONFIG = {
  tab_switch:           { icon: ArrowLeftRight, color: "text-amber-500",   bg: "bg-amber-50",   label: "Tab switch" },
  fullscreen_exit:      { icon: Minimize2,      color: "text-orange-500",  bg: "bg-orange-50",  label: "Fullscreen exit" },
  focus_loss:           { icon: EyeOff,         color: "text-red-500",     bg: "bg-red-50",     label: "Focus loss" },
  network_interruption: { icon: WifiOff,        color: "text-red-600",     bg: "bg-red-100",    label: "Network interruption" },
  reconnect:            { icon: RefreshCw,      color: "text-blue-500",    bg: "bg-blue-50",    label: "Reconnect" },
  inactivity_warning:   { icon: Clock,          color: "text-yellow-500",  bg: "bg-yellow-50",  label: "Inactivity warning" },
  session_start:        { icon: Play,           color: "text-green-500",   bg: "bg-green-50",   label: "Session started" },
  session_end:          { icon: Square,         color: "text-gray-500 dark:text-gray-300",    bg: "bg-gray-100 dark:bg-gray-800",   label: "Session ended" },
}
