import axios from 'axios'
import {Faheart} from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

const Scrollrow = ({title, fetchURL}) => {
    const [movie, setMovie] = useState([])
    const [liked, setLiked] = useState(false)

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
                        <img
                            className='w-full h-auto block'
                            src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item.title}/>
                        <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white'>
                            <p className='text-xs md:text-small font-bold flex justify-center h-full items-center'>{item?.title}</p>
                            <p>
                                {liked ? <Faheart /> : <FaRegHeart />}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Scrollrow