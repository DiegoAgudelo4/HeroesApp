import React, { useContext } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom';
//children: recibe los componentes que estarán dentro
export const PrivateRoute = ({children}) => {
    const {logged} = useContext(AuthContext);
    const {pathname, search}= useLocation();
    const lastPath= pathname+search;
    localStorage.setItem('lastPath', lastPath);

  return (
    logged
  ) ? children
  :<Navigate to='/login'/>
}
