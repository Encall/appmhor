import React, { useContext } from 'react'
import { AuthContext } from '../contexts/context'
import { Navigate } from 'react-router-dom'

export const Protect: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const auth = useContext(AuthContext)

  return auth?.authContext.IsLogin ? children : <Navigate replace to="/" state={{ requestStatus: 'Error' }} />
}
