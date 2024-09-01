import { createContext, useReducer, useEffect } from "react";


// create the context
export const AuthContext = createContext()

// define authReducer
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN' :
            return {user: action.payload}
        case 'LOGOUT' :
            return {user: null}
        default: 
            return state
    }
}

// create the provider
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {user: null})

    useInsertionEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) {
            dispatch({type: 'LOGIN', payload: user})
        }
    }, [])

    // check state:
    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}