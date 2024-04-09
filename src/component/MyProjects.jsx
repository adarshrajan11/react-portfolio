import React from 'react'
import { motion } from 'framer-motion'
import Bubbles from './Bubbles' // Import the Bubbles component
import project1 from '../assets/data.jpg'
import project2 from '../assets/netflix.jpg'
import project3 from '../assets/Hrms.jpg'

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
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: project2,
  },
  {
    id: 3,
    title: 'HRMS',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: project3,
  },
  // Add more projects here
]

const MyProjects = () => {
  return (
    <div className='my-projects'>
      <h2>My Projects</h2>
      <div className='projects-container'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='project-card'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
      <Bubbles />
    </div>
  )
}

export default MyProjects
