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

    // check state:
    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}