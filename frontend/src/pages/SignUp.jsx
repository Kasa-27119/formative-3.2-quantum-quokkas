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
    <div className='log-on-container'>
        <div className='log-on-form--container'>
            {/* top container */}
            <div id='single-top-container'>
                {/* <span>&#2190</span> */}
                <h1>Sign Up</h1>
            </div>

            {/* sign up form */}
            <form className='log-on-form' onSubmit={handleSubmit}>
                <div className='log-on-field'>
                    <label className='form-label'>Email</label>
                    <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className='log-on-field'>
                <label className='form-label'>Password</label>
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                </div>

                {error && <div className='error'>Error</div>}
            </form>

            <div className='log-on-submit--button'>
                <button disabled={isLoading} onClick={handleSubmit}>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp
