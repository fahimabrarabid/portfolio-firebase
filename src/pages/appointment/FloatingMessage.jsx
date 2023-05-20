import React from 'react'
import { motion } from 'framer-motion'

const FloatingMessage = (props) => {
  return (
    <motion.div
      key={`success-message-${props.id}`}
      className={`fixed bottom-4 left-4 transform -translate-x-1/2 bg-${props.color} text-white px-4 py-2 rounded-md shadow-md`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <p>{props.message}</p>
    </motion.div>
  )
}

export default FloatingMessage
