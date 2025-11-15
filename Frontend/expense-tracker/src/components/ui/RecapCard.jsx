import React from 'react'
import { motion } from 'framer-motion'
import { currency } from '../../utils/format'

export default function RecapCard({ title, value, delta, className='' }){
  return (
    <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} className={`p-4 rounded-2xl shadow-sm bg-white ${className}`}>
      <div className="text-xs text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{currency(value)}</div>
      {delta !== undefined && <div className="text-sm text-slate-400">{delta}</div>}
    </motion.div>
  )
}
