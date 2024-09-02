import React, { useState } from 'react';

const ProjectForm = () => {
    // State to manage form input values
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    // submit form handler
    const handleSubmit = async (e) => {
        // prevent page refresh
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const user_id = user.email;

        const project = {
            name,
            author,
            url,
            description,
            user_id
        };

        console.log(project);
        // Here, you would typically send 'project' to your backend server
    };

  return (
   // create project page container
   <div className='create-project-container'>
   {/* top container */}
   <div id='single-top-container'>
       <span>&#2190</span>
       <h1>Create New Project</h1>
   </div>

   {/* create project form */}
   <form className='project-form' onSubmit={handleSubmit}>
       <label className='form-label'>Project Name</label>
       <input type="text" />

       <label className='form-label'>Author</label>
       <input type="text" />

       <label className='form-label'>Portfolio Link</label>
       <input type="url" />

       <label className='form-label'>Upload Project Image</label>
       <input type="file" accept="image/*"/>

       <label className='form-label'>Description</label>
       <input type="text" />

       <button>Create Project</button>
       <div className='error'>Error</div>
   </form>
</div>
  )
}

export default ProjectForm
