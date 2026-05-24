"use client"

import { 
  PieChart, 
  Pie, 
  Cell, 
  Legend, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts"

export function SessionStatusChart({ sessions = [] }) {
  const statusCounts = {
    active: sessions.filter(s => s.sessionStatus === "active").length,
    completed: sessions.filter(s => s.sessionStatus === "completed").length,
    flagged: sessions.filter(s => s.sessionStatus === "flagged").length,
    terminated: sessions.filter(s => s.sessionStatus === "terminated").length,
  }

  const data = [
    { name: "Active", value: statusCounts.active, fill: "#16a34a" },
    { name: "Completed", value: statusCounts.completed, fill: "#6b7280" },
    { name: "Flagged", value: statusCounts.flagged, fill: "#ea580c" },
    { name: "Terminated", value: statusCounts.terminated, fill: "#dc2626" },
  ].filter(item => item.value > 0)

  if (data.length === 0) {
    return (
      <div className="bg-card rounded-lg border p-6">
        <h3 className="text-lg font-semibold mb-4">Session Status</h3>
        <div className="flex items-center justify-center h-[300px]">
          <p className="text-muted-foreground">No data available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-4">Session Status Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={(entry) => `${entry.name}: ${entry.value}`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
