import React from 'react'
import { UserAuth } from '../context/Auth'

const Proute = ({children}) => {
    if(!user) {
        return
    }

  return (
    <div>Proute</div>
  )
}

export default Proute