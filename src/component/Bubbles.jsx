import React from 'react'
import { motion } from 'framer-motion'

const Bubbles = () => {
  const numberOfBubbles = 20 // Adjust the number of bubbles as needed

  return (
    <svg className='bubbles'>
      {[...Array(numberOfBubbles)].map((_, index) => (
        <motion.circle
          key={index}
          cx={`${Math.random() * 100}%`}
          cy={`${Math.random() * 100}%`}
          r={Math.random() * 20}
          fill='rgba(255, 255, 255, 0.5)'
          animate={{
            x: `${Math.random() * 200 - 100}%`,
            y: `${Math.random() * 200 - 100}%`,
            rotate: Math.random() * 360,
            transition: {
              duration: Math.random() * 5 + 5, // Random duration between 5 to 10 seconds
              yoyo: Infinity, // Animation loops indefinitely
            },
          }}
        />
      ))}
    </svg>
  )
}

export default Bubbles
