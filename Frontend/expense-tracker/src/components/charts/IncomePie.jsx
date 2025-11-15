import React from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#34D399', '#60A5FA', '#F97316', '#A78BFA']

export default function IncomePie({ data }){
  return (
    <div className="h-52 w-full bg-white rounded-2xl p-4 shadow-sm">
      <h4 className="text-sm font-medium mb-2">Income by Category</h4>
      <ResponsiveContainer width="100%" height={140}>
        <PieChart>
          <Pie dataKey="value" data={data} innerRadius={30} outerRadius={50} paddingAngle={3}>
            {data.map((entry, index)=> <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
