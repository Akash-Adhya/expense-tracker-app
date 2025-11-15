import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function TrendChart({ data }){
  return (
    <div className="h-56 w-full bg-white rounded-2xl p-4 shadow-sm">
      <h4 className="text-sm font-medium mb-2">Income / Expense Trend</h4>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke="#10B981" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="expense" stroke="#FB7185" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
