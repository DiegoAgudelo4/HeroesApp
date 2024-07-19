import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    //si es nulo devuelve '/'
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Diego xd')

    navigate(lastPath,
      {
        replace: true
      }
    )
  }
  return (
    <div className='container mt-5'>
      <h1>login</h1>
      <hr />
      <button

        className='btn btn-primary'
        onClick={handleLogin}
      >
        login
      </button>
    </div>
  )
}
