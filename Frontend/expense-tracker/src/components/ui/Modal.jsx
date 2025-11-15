import React from 'react'
import { motion } from 'framer-motion'

export default function Modal({ open, onClose, children }){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute inset-0 bg-black/30" onClick={onClose} />
      <motion.div initial={{y:12, opacity:0}} animate={{y:0,opacity:1}} className="bg-white rounded-2xl p-6 z-10 w-full max-w-md shadow-lg">
        {children}
      </motion.div>
    </div>
  )
}
