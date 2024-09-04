import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Trash } from 'react-bootstrap-icons'
import { Pen } from 'react-bootstrap-icons'
import {formatDistanceToNow} from 'date-fns'

import { useProjectsContext } from '../hooks/useProjectContext'

const baseURL = import.meta.env.VITE_API_BASE_URL

const ProjectDetails = ({project}) => {
  const {dispatch} = useProjectsContext();
  const navigate = useNavigate();

  // state for editing 
  const [isEditing, setIsEditing] = useState(false);

  // state for editing form inputs
  const [editName, setEditName] = useState(project.name);
  const [editAuthor, setEditAuthor] = useState(project.author);
  const [editURL, setEditURL] = useState(project.url);
  const [editDescription, setEditDescription] = useState(project.description);
  const [editImageURL, setEditImageURL] = useState(project.imageURL);

  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user ? user.email : null;

  // edit project handler
  const handleEdit = () => {
    setIsEditing(true)
  }

  // submit edit
  const handleSubmitEdit = async () => {
    // const formData = new FormData();
    // formData.append('name', editName);
    // formData.append('author', editAuthor);
    // formData.append('url', editURL);
    // formData.append('imageURL', editImageURL); // Ensure backend can handle this
    // formData.append('description', editDescription);

    const updatedProject = {
      name: editName,
      image: editImageURL,
      author: editAuthor,
      url: editURL,
      description: editDescription
    }
    
    try {
      const response = await axios.patch(
        `${baseURL}/api/projects/${project._id}`,
        updatedProject, // Pass the FormData object
        // {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // }
      );
      const updatedData = response.data;
      if (response.status === 200) {
        console.log(response);
        console.log(updatedData);
        dispatch({ type: 'UPDATE_PROJECT', payload: updatedData });
        setIsEditing(false);
      }
    } catch (error) {
      console.log('Error updating project:', error);
    }
  };

  // cancel edit handler
  const handleCancelEdit = () => {
    setEditName(project.name);
    setEditAuthor(project.author);
    setEditURL(project.url);
    setEditDescription(project.description);
    setEditImageURL(project.imageURL);
    setIsEditing(false);
  }

  const handleNavigate = () => {
    let path = `/${project._id}`
    navigate(path)
  }

  const handleDelete = async () => {
    const response = await axios.delete(`${baseURL}/api/projects/${project._id}`)
    const json = await response.data
    if (response.status === 200) {
      console.log(json)
      dispatch({type: 'DELETE_PROJECT', payload: json})
    }
  }

  return (
    
    <div className='project-details'>
      {/* conditional render - IS editing */}
      {/* edit project form */}
      {isEditing ? (
          <div className='edit-modal'>
            <label className='form-label'>Edit Project Name</label>
            <input type="text" 
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            />

            <label className='form-label'>Edit Project Author</label>
            <input type="text" 
            value={editAuthor}
            onChange={(e) => setEditAuthor(e.target.value)}
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

            <div className='button-edit-container'>

              <button onClick={handleSubmitEdit} className='save-button'>Save Edit</button>
              <button onClick={handleCancelEdit} className='cancel-button'>Cancel Edit</button>

            </div>


            
          </div>
      ) : (
        <>
          {/* original render */}
          <div className='project-card-container'>
            {/* project image */}
            {project.image && (
              <img className='project-image' src={`${baseURL}/public/uploads/${project.image}`} alt={project.title} />
            )}
            {/* project details */}
            <div className='project-info-container'>
              <div className='project-names-container'>
                <h4>{project.name}</h4>
                <h6>{project.author}</h6>
              </div>
              <div className='project-bottom-info-container'>
                <div className='project-bottom-left-container'>
                  <p>Created At: {formatDistanceToNow(new Date(project.createdAt), {includeSeconds: true}, {addSuffix: true})} ago</p>
                  <p><strong>Created by: </strong>{project.user_id}</p>
                </div>
                <div className='project-bottom-right-container'>
                  {project.user_id === user_id && (
                    <>
                      <span className='edit-button' onClick={handleEdit}><Pen/></span>
                      <span className='delete-button' onClick={handleDelete}><Trash/></span>
                    </>
                  )}

                </div>
                
                
              </div>

              <div className='see-more-container'>
                <button onClick={handleNavigate}>See more</button>
              </div>
              
            </div>
            
            
            
            
          </div>
            
        </>
      )}
    </div>
  )
}

export default ProjectDetails
