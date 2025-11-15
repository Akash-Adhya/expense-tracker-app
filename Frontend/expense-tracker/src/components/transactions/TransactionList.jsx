import React, { useState } from 'react'
import TransactionRow from './TransactionRow'

export default function TransactionList({ items, onDeleteBulk }){
  const [selected, setSelected] = useState([])

  function toggle(id){
    setSelected(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id])
  }

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium">Recent Transactions</h4>
        <div>
          {selected.length>0 && <button onClick={()=>onDeleteBulk(selected)} className="px-3 py-1 rounded bg-red-50 text-red-600">Delete ({selected.length})</button>}
        </div>
      </div>
      <div className="space-y-2">
        {items.map(it => <TransactionRow key={it.id} item={it} onToggle={toggle} selected={selected.includes(it.id)} />)}
      </div>
    </div>
  )
}
