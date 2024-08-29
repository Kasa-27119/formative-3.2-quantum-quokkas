// Imports
import { useAuthContext } from './useAuthContext'

/** CONTEXT OF USELOGOUT.JSX
 * Imports (1)
 * uselogout function (10-18)
 * logout function (13-17)
 */

export const useLogout = () => {
    const {dispatch} = useAuthContext()

    const logout = () => {
        localStorage.removeItem('user')

        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}

