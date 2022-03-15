import React from 'react'
import Project from './Project/project'
import './projects.css'
const Projects = () => {
  return (
    <div className='projects-container'>
        <h3 className='projects-title'>
            PROJECTS
        </h3>
        <div className='projects-list'>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />

        </div>
    </div>
  )
}

export default Projects

