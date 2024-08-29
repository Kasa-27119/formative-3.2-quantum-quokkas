import React from 'react'
import { useState } from 'react'
import {useSignUp} from '../hooks/useSignUp'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signUp, isLoading, error} = useSignUp()

    // submit form handler
    const handleSubmit = async (e) => {
        // prevent page refresh
        e.preventDefault()

        await signUp(email, password)
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
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}

            />

            <label className='form-label'>Password</label>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Sign Up</button>
            {error && <div className='error'>Error</div>}
        </form>
    </div>
  )
}

export default SignUp
