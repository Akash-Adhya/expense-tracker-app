import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn, SignUp } from '@clerk/clerk-react'
import Dashboard from './pages/Dashboard'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import { AppProvider } from './context/AppContext'
import MainLayout from './components/layout/Sidebar'

export default function App(){
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

        {/* Protected UI */}
        <Route element={<ProtectedLayout/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/incomes" element={<Incomes/>} />
          <Route path="/expenses" element={<Expenses/>} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppProvider>
  )
}

function ProtectedLayout(){
  return (
    <>
      <SignedIn>
        <MainLayout />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/dashboard"/>
      </SignedOut>
    </>
  )
}
