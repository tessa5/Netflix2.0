import axios from 'axios'

import React, { useEffect, useState } from 'react'
import Moviefile from './Moviefile'

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
            <div 
                id={'slider'}
                className='w-full h-full whitespace-normal overflow'
                >
                {movie.map((item, id) =>(
                    <Moviefile key={id} item={item}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Scrollrow