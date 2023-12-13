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
            <div className= 'w-full h-[550px] absolute bg-gradient-to-r from-black'></div>
            <img
                className='w-full h-full object-cover'
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                alt={movie?.title} />
        </div>
        
    </div>
  )
}

export default Main