import React from 'react'
import { motion } from "motion/react"
const Card = ({cardForegroundRef}) => {
  return (
    <motion.div drag dragConstraints={cardForegroundRef} className="my-20 card w-35 h-40 rounded-2xl bg-blue-900/70 m-3 shadow shadow-blue-500"></motion.div>
  )
}

export default Card