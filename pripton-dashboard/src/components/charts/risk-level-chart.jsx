"use client"

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell 
} from "recharts"

export function RiskLevelChart({ sessions = [] }) {
  const riskCounts = {
    critical: sessions.filter(s => s.riskLevel === "critical").length,
    high: sessions.filter(s => s.riskLevel === "high").length,
    medium: sessions.filter(s => s.riskLevel === "medium").length,
    low: sessions.filter(s => s.riskLevel === "low").length,
  }

  const data = [
    { name: "Critical", value: riskCounts.critical, fill: "#dc2626" },
    { name: "High", value: riskCounts.high, fill: "#ea580c" },
    { name: "Medium", value: riskCounts.medium, fill: "#eab308" },
    { name: "Low", value: riskCounts.low, fill: "#16a34a" },
  ]

  return (
    <div className="bg-card rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-4">Risk Level Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
