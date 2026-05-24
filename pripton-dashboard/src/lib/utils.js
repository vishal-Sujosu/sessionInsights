import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { RISK_THRESHOLDS } from "./constants";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDuration(seconds) {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  }
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${h}h ${m}m`;
}

export function formatTimestamp(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);

  if (diffHours < 24) {
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
    }
    const h = Math.floor(diffHours);
    return `${h} hour${h !== 1 ? "s" : ""} ago`;
  }

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = months[date.getMonth()];
  const d = date.getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedHours = hours.toString().padStart(2, "0");

  return `${month} ${d}, ${formattedHours}:${minutes} ${ampm}`;
}

export function formatScore(score) {
  return `${score}%`;
}

export function getRiskFromScore(score) {
  if (score <= RISK_THRESHOLDS.critical) return "critical";
  if (score <= RISK_THRESHOLDS.high) return "high";
  if (score <= RISK_THRESHOLDS.medium) return "medium";
  return "low";
}

export function truncate(str, maxLength = 40) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}
