import React, { useState } from 'react';
import axios from 'axios'
import { useProjectsContext } from '../hooks/useProjectContext';

const baseURL = import.meta.env.VITE_API_BASE_URL

const ProjectForm = () => {
    const {dispatch, projects} = useProjectsContext()

    // State to manage form input values
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setURL] = useState('');
    const [imageURL, setImageURL] = useState(null)
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null)

    // submit form handler
    const handleSubmit = async (e) => {
        // prevent page refresh
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const user_id = user.email;

        // const project = {
        //     name,
        //     imageURL,
        //     author,
        //     url,
        //     description,
        //     user_id
        // };

        const formData = new  FormData()
        formData.append('user_id', user_id)
        formData.append('name', name)
        formData.append('author', author)
        formData.append('url', url)
        formData.append('image', imageURL)
        formData.append('description', description)

        // try/catch to send project json data to server
        try {

            const response = await axios.post(`${baseURL}/api/projects/`, formData, {
                headers: {
                    // 'Content-Type': 'application/json'
                    'Content-Type': 'multipart/form-data'
                }
            })

            // reset field values if successful
            setName('')
            setAuthor('')
            setURL('')
            setImageURL('')
            setDescription('')
            setError(null)
            console.log('new project added', response.data)

            dispatch({type: 'CREATE_PROJECTS', payload: response.data})

        } catch (error) {
            console.error(error)
            setError(error.message)
        }
    };

  return (
        // create project page container
        <div className='create-project-container'>
            {/* top container */}
            <div id='single-top-container'>
                <h1>Create New Project</h1>
            </div>

            {/* create project form */}
            <form className='project-form' onSubmit={handleSubmit}>
                <label className='form-label'>Project Name</label>
                <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <label className='form-label'>Author</label>
                <input 
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                value={author} />
                <label className='form-label'>Portfolio Link</label>
                <input 
                type="url"
                onChange={(e) => setURL(e.target.value)}
                value={url} />
                <label className='form-label'>Upload Project Image</label>
                <input 
                type="file"
                onChange={(e) => setImageURL(e.target.files[0])}
                accept="image/*"/>
                <label className='form-label'>Description</label>
                <input 
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description} />

                <button>Create Project</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default ProjectForm
