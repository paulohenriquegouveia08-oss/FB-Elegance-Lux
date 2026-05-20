"use client"

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts"

const data = [
  { name: "Seg", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Ter", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Qua", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Qui", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sex", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Sáb", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Dom", total: Math.floor(Math.random() * 5000) + 1000 },
]

export function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#b88b4a" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#b88b4a" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2a2a" />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `R$${value}`}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#111', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff' }}
          itemStyle={{ color: '#b88b4a' }}
          formatter={(value: any) => [`R$ ${Number(value).toFixed(2)}`, "Vendas"]}
        />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#b88b4a"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorTotal)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
