import React, { useReducer } from 'react'
import { authReducer } from './authReducer'
const initiaState = {
    logged:false,
}

export const AuthProvider = ({children}) => {
    const[state, dispatch] =useReducer(authReducer, initiaState);
  return (
    
    <AuthProvider.provider value={{}}>
        {children}
    </AuthProvider.provider>
  )
}
