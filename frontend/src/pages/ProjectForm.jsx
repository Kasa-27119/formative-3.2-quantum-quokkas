import React from 'react'

const ProjectForm = () => {
    // submit form handler
    const handleSubmit = async (e) => {
        // prevent page refresh
        e.preventDefault()
    }

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

       <button>Create Project</button>
       <div className='error'>Error</div>
   </form>
</div>
  )
}

export default ProjectForm
