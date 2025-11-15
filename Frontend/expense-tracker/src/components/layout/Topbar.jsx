import React from 'react'
import { useUser } from '@clerk/clerk-react'

export default function Topbar(){
  const { user } = useUser() || {}
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 rounded-lg bg-surface">Menu</button>
        <h3 className="text-lg font-medium">Overview</h3>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-sm text-slate-600">{user?.firstName || 'User'}</div>
        <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center">U</div>
      </div>
    </header>
  )
}
