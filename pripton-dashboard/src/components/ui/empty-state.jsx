"use client"

export function EmptyState({ message, icon }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400 gap-3">
      {icon && <div className="h-10 w-10">{icon}</div>}
      <p className="text-sm">{message}</p>
    </div>
  )
}
