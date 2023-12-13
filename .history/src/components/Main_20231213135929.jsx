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

    const movie = movies[Math.floor(Math.random() * movies.length)]
    console.log(movie)

  return (
    <div className='text-white w-full h-[550px]'>
        <div className= 'w-full h-full'>
            <img src={`https://image.tmdb.org/t/p/original/${movie?.back}`} alt={movie?.title} />
        </div>
    </div>
  )
}

export default Main