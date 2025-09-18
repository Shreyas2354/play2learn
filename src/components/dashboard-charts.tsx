
"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const overviewData = [
  { name: "Physics", score: 91 },
  { name: "Biology", score: 82 },
  { name: "Chemistry", score: 78 },
  { name: "Math", score: 88 },
  { name: "English", score: 95 },
]

const subjectData = [
  { name: "Aarav", "Physics Lvl 1": 90, "Physics Lvl 2": 95 },
  { name: "Priya", "Physics Lvl 1": 100, "Physics Lvl 2": 92 },
  { name: "Rohan", "Physics Lvl 1": 85, "Physics Lvl 2": 88 },
  { name: "Sita", "Physics Lvl 1": 70, "Physics Lvl 2": 75 },
];


export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={overviewData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
            contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))'
            }}
        />
        <Legend />
        <Bar dataKey="score" name="Average Score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}


export function SubjectPerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={subjectData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
            contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))'
            }}
        />
        <Legend />
        <Bar dataKey="Physics Lvl 1" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Physics Lvl 2" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
