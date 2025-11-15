import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import TransactionList from '../components/transactions/TransactionList'
import Modal from '../components/ui/Modal'
import { createTransaction } from '../hooks/useDummyApi'
import { v4 as uuidv4 } from 'uuid'

export default function Expenses(){
  const { transactions, addTransaction, deleteTransactions } = useApp()
  const expenses = (transactions||[]).filter(t => t.type === 'expense')
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ title:'', amount:'', category:'' })

  async function handleAdd(){
    const tx = { ...form, id: uuidv4(), type: 'expense', amount: Number(form.amount), date: new Date().toISOString() }
    await createTransaction(tx)
    addTransaction(tx)
    setOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Expenses</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-primary text-white" onClick={()=>setOpen(true)}>Add Expense</button>
          <button className="px-3 py-1 rounded bg-surface">Export</button>
        </div>
      </div>

      <TransactionList items={expenses} onDeleteBulk={deleteTransactions} />

      <Modal open={open} onClose={()=>setOpen(false)}>
        <h4 className="text-lg font-medium">Add Expense</h4>
        <div className="mt-4 space-y-3">
          <input className="w-full p-2 border rounded" placeholder="Title" value={form.title} onChange={e=>setForm(s=>({...s,title:e.target.value}))} />
          <input className="w-full p-2 border rounded" placeholder="Amount" value={form.amount} onChange={e=>setForm(s=>({...s,amount:e.target.value}))} />
          <input className="w-full p-2 border rounded" placeholder="Category" value={form.category} onChange={e=>setForm(s=>({...s,category:e.target.value}))} />
          <div className="flex justify-end gap-2 mt-2">
            <button className="px-3 py-1 rounded" onClick={()=>setOpen(false)}>Cancel</button>
            <button className="px-3 py-1 rounded bg-primary text-white" onClick={handleAdd}>Add</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
