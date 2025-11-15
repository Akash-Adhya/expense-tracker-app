import React, { createContext, useContext, useState, useEffect } from 'react'
import { fetchSummary, fetchTransactions } from '../hooks/useDummyApi'

const AppContext = createContext()

export function AppProvider({ children }){
  const [summary, setSummary] = useState(null)
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let mounted = true
    async function load(){
      setLoading(true)
      const s = await fetchSummary()
      const t = await fetchTransactions()
      if(!mounted) return
      setSummary(s)
      setTransactions(t)
      setLoading(false)
    }
    load()
    return ()=> mounted = false
  },[])

  async function addTransaction(tx){
    setTransactions(prev => [tx, ...prev])
  }

  async function deleteTransactions(ids){
    setTransactions(prev => prev.filter(t => !ids.includes(t.id)))
  }

  return (
    <AppContext.Provider value={{ summary, transactions, addTransaction, deleteTransactions, loading }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp(){
  return useContext(AppContext)
}
