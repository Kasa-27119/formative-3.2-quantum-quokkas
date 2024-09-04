// Imports
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

/** CONTENTS IN NAVBAR.JSX
 * imports (2)
 * Logout function (10 - 61)
 * Using Email and turning it into username (21-26)
 */

// Navbar logout function
const Navbar = () => {
    const {logout} = useLogout()

    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    // Truning email into username after login
    const getEmailCharactersBeforeAtSymbol = (email) => 
    {
        const delimiter = '@';
        const parts = email.split(delimiter);
        return parts.length > 1 ? parts[0] : ''
    }

    return (
        <header>

            <div className='container'>

                <Link to='/' className='portfolio-home-link'>
                    <h1>Portfolio App</h1>
                </Link>

                <nav>
                    {user &&

                        <div className='logged-in-container'>
                            <span className='nav-user-email'>
                                {getEmailCharactersBeforeAtSymbol
                                (user.email)}</span>
                                <button onClick={handleClick} className='logout-button'>Logout</button>
                        </div>
                        }

                        {!user && 
                            <div className='signup-login-container'>
                                <Link to='/signup' className='signup-button'>Sign Up</Link>
                                <Link to='/login' className='login-button'>Login</Link>
                                
                            </div>
                        }

                </nav>

            </div>

        </header>
    )
}

export default Navbar