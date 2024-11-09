import React from 'react'
import { motion } from 'framer-motion'
import Bubbles from './Bubbles' // Import the Bubbles component
import project1 from '../assets/data.jpg'
import project2 from '../assets/netflix.jpg'
import project3 from '../assets/Hrms.jpg'
import VehicleAnimation from './VehicleAnimation'

const projects = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: project1,
  },
  {
    id: 2,
    title: 'Netflix clone',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: project2,
  },
  {
    id: 3,
    title: 'HRMS',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: project3,
  },
  // Add more projects here
]

const MyProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="my-projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
         <Bubbles /> 
        My Projects
      </motion.h2>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <VehicleAnimation/>
    
    </div>
  )
}

export default MyProjects
