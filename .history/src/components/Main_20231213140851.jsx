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
        <div>
        <div>
            <button className='border bg-gray-300 border-gray-300 px-5 py-2 text-black'>Play</button>
            <button className='border border-gray-300 px-5 py-2 ml-4'>Watch Later</button>
        </div>
    </div>
  )
}

export default Main