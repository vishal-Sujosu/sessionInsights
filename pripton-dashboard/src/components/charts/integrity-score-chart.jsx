"use client"

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts"

export function IntegrityScoreChart({ sessions = [] }) {
  // Create buckets of integrity scores
  const buckets = {
    "0-20": 0,
    "21-40": 0,
    "41-60": 0,
    "61-80": 0,
    "81-100": 0,
  }

  sessions.forEach(session => {
    const score = session.integrityScore
    if (score <= 20) buckets["0-20"]++
    else if (score <= 40) buckets["21-40"]++
    else if (score <= 60) buckets["41-60"]++
    else if (score <= 80) buckets["61-80"]++
    else buckets["81-100"]++
  })

  const data = [
    { range: "0-20", count: buckets["0-20"], fill: "#dc2626" },
    { range: "21-40", count: buckets["21-40"], fill: "#ea580c" },
    { range: "41-60", count: buckets["41-60"], fill: "#eab308" },
    { range: "61-80", count: buckets["61-80"], fill: "#65a30d" },
    { range: "81-100", count: buckets["81-100"], fill: "#16a34a" },
  ]

  return (
    <div className="bg-card rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-4">Integrity Score Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="count" 
            stroke="#3b82f6" 
            dot={{ fill: "#3b82f6", r: 4 }}
            activeDot={{ r: 6 }}
            name="Number of Sessions"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
