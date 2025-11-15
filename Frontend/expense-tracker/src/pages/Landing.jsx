import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Landing(){
  const nav = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        <motion.div className="space-y-6" initial={{opacity:0, x:-20}} animate={{opacity:1,x:0}}>
          <h1 className="text-4xl font-bold">Track your income & expenses with ease</h1>
          <p className="text-lg text-slate-600">Minimal, modern expense tracker to understand where your money goes.</p>
          <div className="flex gap-3">
            <button onClick={()=>nav('/login')} className="px-4 py-2 rounded bg-primary text-white">Get started</button>
            <button className="px-4 py-2 rounded bg-surface">Learn more</button>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1,x:0}} className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl p-6 bg-white shadow-lg">
            <img src="/src/assets/illustrations/finance-hero.svg" alt="finance" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
