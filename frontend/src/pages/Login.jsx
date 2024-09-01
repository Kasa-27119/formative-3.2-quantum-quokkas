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
        <form className='login' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>Email</label>
            <input 
                type='email'
                onChange={(e) => setEmail(e.target.value)} 
                valuse={password}
            />

            <label>Password</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                valuse={password}
            />

            <button disabled={isLoading}>Log In</button>
            {error && <div className='error'>{error}</div>}
        
        </form>
    )
}

export default Login
