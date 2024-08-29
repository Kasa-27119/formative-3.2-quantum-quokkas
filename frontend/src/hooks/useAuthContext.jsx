import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    // check if context is available
    if (!context) {
        throw Error('useAuthContext must be used inside of AuthContextProvider')
    }

    return context
}