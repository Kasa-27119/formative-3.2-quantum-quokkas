import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

/** CONTECTS FOR LOGIN.JSX
 * Imports (1-2)
 * Log In Component
 * Log in Form with email and password input
 */

// Login in Component
const Login = () => {
    //  Manage Input hooks
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    // login sumbit information
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }

    // Log in form with email and password input
    return (
        // sign up page container
        <div className='log-on-container'>
            <div className='log-on-form--container'>

                {/* top container */}
                <div id='single-top-container'>
                    {/* <span>&#2190</span> */}
                    <h1>Login</h1>
                </div>

                {/* login form */}
                <form className='log-on-form' onSubmit={handleSubmit}>
                    <div className='log-on-field'>
                        <label className='form-label'>Email</label>
                        <input 
                            type='email'
                            onChange={(e) => setEmail(e.target.value)} 
                            valuse={email}
                        />
                    </div>

                    <div className='log-on-field'>
                        <label className='form-label'>Password</label>
                        <input 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            valuse={password}
                        />
                    </div>

                    {error && <div className='error'>{error}</div>}
                </form>

                <div className='log-on-submit--button'>
                    <button disabled={isLoading} onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
