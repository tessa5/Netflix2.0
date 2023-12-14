import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Moviefile from './Moviefile'

const Scrollrow = ({title, fetchURL}) => {
    const [movie, setMovie] = useState([])
    

    useEffect(()=> {
        axios.get(fetchURL).then((res) =>{
            setMovie(res.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' );
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider' );
        slider.scrollLeft = slider.scrollLeft + 500;
      };

  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center">
        <FaChevronLeft
            onClick={slideLeft}
            className='bg-white text-green-600 left-0 rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block'
            size={40}
            />
            <div 
                id={'slider' }
                className='w-full h-full relative whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'
                >
                {movie.map((item, id) =>(
                    <Moviefile key={id} item={item}/>
                ))}
            </div>
            <FaChevronRight
                onClick={slideRight}
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block'
                size={40}
        />
        </div>
    </>
  )
}

export default Scrollrow