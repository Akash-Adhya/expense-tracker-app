import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { SignOutButton } from '@clerk/clerk-react'
import Topbar from './Topbar'

export default function MainLayout(){
  return (
    <div className="min-h-screen flex">
      <aside className="w-72 hidden md:block bg-white shadow-lg p-4">
        <SidebarContent />
      </aside>

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function SidebarContent(){
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Expense<span className="text-primary">Track</span></h2>
        <p className="text-sm text-slate-500 mt-1">Manage money simply</p>
      </div>

      <nav className="flex-1 space-y-1">
        <NavLink to="/dashboard" className={({isActive}) => `block p-3 rounded-lg ${isActive? 'bg-surface':''}`}>Dashboard</NavLink>
        <NavLink to="/incomes" className={({isActive}) => `block p-3 rounded-lg ${isActive? 'bg-surface':''}`}>Incomes</NavLink>
        <NavLink to="/expenses" className={({isActive}) => `block p-3 rounded-lg ${isActive? 'bg-surface':''}`}>Expenses</NavLink>
      </nav>

      <div className="mt-6">
        <SignOutButton>
          <button className="w-full bg-red-50 text-red-600 py-2 rounded-lg">Logout</button>
        </SignOutButton>
      </div>
    </div>
  )
}
