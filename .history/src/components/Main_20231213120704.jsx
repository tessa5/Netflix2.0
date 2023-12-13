import React, { useEffect, useState } from 'react'
import requests from '../request'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        axios.get(request.requestPopular).then((res)=>{
            setMo
        })
    })
  return (
    <div>Main</div>
  )
}

export default Main