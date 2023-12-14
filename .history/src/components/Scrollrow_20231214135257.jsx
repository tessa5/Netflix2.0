import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Scrollrow = ({title, fetchURL}) => {
    const [movie, setMovie] = useState([])

    useEffect(()=> {
        axios.get(fetchURL).then((res) =>{
            setMovie(res.data.results)
        })
    }, [fetchURL])
    console.log(movie)

  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center">
            <div id={'slider'}>
                {movie.map((item, id) =>(
                    <div className="2-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                        <img src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item.title}/>
                        <div absolute top-0 left-0 w-full h-full hover-bg-black/80>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Scrollrow