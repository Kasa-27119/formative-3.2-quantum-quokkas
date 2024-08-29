import React from 'react'

const ProjectDetails = ({project}) => {
  return (
    <div className='project-details'>
        <h4>{project.name}</h4>
        <h6>{project.author}</h6>
        <p>{project.createdAt}</p>
    </div>
  )
}

export default ProjectDetails
