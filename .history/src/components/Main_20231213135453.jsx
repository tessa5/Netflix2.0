import React, { useEffect, useState } from 'react'
import requests from '../request'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        axios.get(requests.requestPopular).then((res)=>{
            setMovies(res.data.results)
        })
    },[])

    const movie = movies[Math.floor]
    console.log(movies)

  return (
    <div className='text-white'>Main</div>
  )
}

export default Main