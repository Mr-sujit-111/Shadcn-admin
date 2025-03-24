"use client"

import { motion } from "framer-motion"

export function LoadingAnimation() {
  return (
    <div className="flex h-[70vh] w-full items-center justify-center">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-4 w-4 rounded-full bg-primary"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0,
          }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-primary"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-primary"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </motion.div>
    </div>
  )
}

