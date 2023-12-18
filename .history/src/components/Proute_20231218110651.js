import React from 'react'
import { UserAuth } from '../context/Auth'
import { Navigate } from 'react-router-dom'

const Proute = ({children}) => {
    if(!user) {
        return <Navigate
    }

  return (
    <div>Proute</div>
  )
}

export default Proute