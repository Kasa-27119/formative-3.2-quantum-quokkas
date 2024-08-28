import React from 'react'

const SignUp = () => {
    // submit form handler
    const handleSubmit = async (e) => {
        // prevent page refresh
        e.preventDefault()
    }

  return (
    // sign up page container
    <div className='sign-up-container'>
        {/* top container */}
        <div id='single-top-container'>
            <span>&#2190</span>
            <h1>Sign Up</h1>
        </div>

        {/* sign up form */}
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <label className='form-label'>Email</label>
            <input type="email" />

            <label className='form-label'>Password</label>
            <input type="password" />

            <button>Sign Up</button>
            <div className='error'>Error</div>
        </form>
    </div>
  )
}

export default SignUp
