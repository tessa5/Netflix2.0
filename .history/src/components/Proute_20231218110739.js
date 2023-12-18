import React from 'react'
import { UserAuth } from '../context/Auth'
import { Navigate } from 'react-router-dom'

const Proute = ({children}) => {
    const {user}
    if(!user) {
        return <Navigate to ='/' />
    } else {
        return children
    }

 
}

export default Proute