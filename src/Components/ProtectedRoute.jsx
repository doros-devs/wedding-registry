import React from 'react'
import { userAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const {user} = userAuth();

  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}

export default ProtectedRoute