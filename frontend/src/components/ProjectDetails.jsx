import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ProjectDetails = ({project}) => {

  // state for editing 
  const [isEditing, setIsEditing] = useState(false)

  // state for editing form inputs
  const [editName, setEditName] = useState(project.name)
  const [editURL, setEditURL] = useState(project.url)
  const [editDescription, setEditDescription] = useState(project.description)
  const [editImageURL, setEditImageURL] = useState(project.imageURL)

  // edit project handler
  const handleEdit = () => {
    setIsEditing(true)
  }

  // cancel edit handler
  const handleCancelEdit = () => {
    setEditName(project.name)
    setEditURL(project.url)
    setEditDescription(project.description)
    setEditImageURL(project.imageURL)
  }

  // submit edit handler
  const submitEditHandler = async () => {
    const updatedProject = {
      name: editName,
      imageURL: editImageURL,
      url: editURL,
      description: editDescription
    }

    // try and catch
    try {
      const response = await axios.patch(
        `http://localhost:4000/api/projects/${project._id}`,
        updatedProject
      )

      const updatedData = response.data

      if (response.status === 200) {
        console.log(response)
        console.log(updatedData)
        dispatch({type: 'UPDATE_PROJECT', payload: updatedData})
        setIsEditing(false)
      }
    } catch (error) {
      console.error('error updating the project', error)
    }
  }

  return (
    <div className='project-details'>
      {/* conditional render - IS editing */}
      {isEditing ? (
        <>
          {/* edit project form */}
          <div className='edit-modal'>
            <label className='form-label'>Edit Project Name</label>
            <input type="text" 
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            />

            <label className='form-label'>Edit Project Image</label>
            <input type="file" 
            accept="image/*"
            value={editImageURL}
            onChange={(e) => setEditImageURL(e.target.value)}
            />

            <label className='form-label'>Edit Portfolio Link</label>
            <input type="url" 
            value={editURL}
            onChange={(e) => setEditURL(e.target.value)}
            />

            <label className='form-label'>Edit Project Description</label>
            <input type="text" 
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            />

            <button onClick={handleSubmitEdit}>Save Edit</button>
            <button onClick={handleCancelEdit}>Cancel Edit</button>
          </div>
        </>
      ) 
      
      : 
      
      (
        <>
          {/* original render */}
          <div>
            {/* project details */}
            <h4>{project.name}</h4>
            <h6>{project.author}</h6>
            <p>{project.createdAt}</p>

            {/* <span className='edit' onClick={handleEdit}>Edit</span> */}
            {/* <span className='edit' onClick={handleDelete}>Delete</span> */}
          </div>
        </>
      )}
    </div>
  )
}

export default ProjectDetails
