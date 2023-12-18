import React from 'react'
import { UserAuth } from '../context/Auth'

const Proute = ({children}) => {
    if(!UserAuth)

  return (
    <div>Proute</div>
  )
}

export default Proute