import React from 'react'
import RecapCard from '../components/ui/RecapCard'
import IncomePie from '../components/charts/IncomePie'
import ExpensePie from '../components/charts/ExpensePie'
import TrendChart from '../components/charts/TrendChart'
import TransactionList from '../components/transactions/TransactionList'
import { useApp } from '../context/AppContext'

export default function Dashboard(){
  const { summary, transactions, deleteTransactions } = useApp()

  const incomeByCategory = []
  const expenseByCategory = []

  const incMap = {}
  const expMap = {}

  (transactions || []).forEach(t => {
    if(t.type === 'income') incMap[t.category] = (incMap[t.category]||0) + t.amount
    else expMap[t.category] = (expMap[t.category]||0) + t.amount
  })

  for(const k in incMap) incomeByCategory.push({ name: k, value: incMap[k] })
  for(const k in expMap) expenseByCategory.push({ name: k, value: expMap[k] })

  const trend = [
    { name: 'Week 1', income: 2000, expense: 800 },
    { name: 'Week 2', income: 1500, expense: 900 },
    { name: 'Week 3', income: 1800, expense: 700 },
    { name: 'Week 4', income: 1900, expense: 1000 }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <RecapCard title="Total Income" value={summary?.totalIncome || 0} />
        <RecapCard title="Total Expenses" value={summary?.totalExpenses || 0} />
        <RecapCard title="Balance" value={summary?.balance || 0} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <TrendChart data={trend} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <IncomePie data={incomeByCategory} />
            <ExpensePie data={expenseByCategory} />
          </div>
        </div>

        <div>
          <TransactionList items={transactions || []} onDeleteBulk={deleteTransactions} />
        </div>
      </div>
    </div>
  )
}
