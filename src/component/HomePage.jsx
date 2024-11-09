import React from 'react'
import { motion } from 'framer-motion'
import Bubbles from './Bubbles'
import banner from '../assets/woodBg.jpg'

const HomePage = () => {
  return (
    <div
      className='home-page'
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        className='hero-banner'
        style={{
          backgroundImage: `url(${banner})`,
          position: 'relative',
          zIndex: 1,
        }}
        initial={{ opacity: 0, translateY: -100 }}
        whileHover={{ scale: 1.1 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Bubbles />
        <h1>Welcome to My Portfolio</h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Discover my work and expertise.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default HomePage
