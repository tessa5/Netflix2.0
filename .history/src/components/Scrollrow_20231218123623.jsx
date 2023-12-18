import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Moviefile from './Moviefile'

const Scrollrow = ({title, fetchURL, rowID}) => {
    const [movie, setMovie] = useState([])
    

    useEffect(()=> {
        axios.get(fetchURL).then((res) =>{
            setMovie(res.data.results)
        })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID );
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider' + rowID );
        slider.scrollLeft = slider.scrollLeft + 500;
      };

  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center group">
        <MdChevronLeft
            onClick={slideLeft}
            className=' left-0  absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
            size={40}
            />
            <div 
                id={'slider' + rowID}
                className='w-full h-full relative whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'
                >
                {movie.map((item, id) =>(
                    <Moviefile key={id} item={item}/>
                ))}
            </div>
            <MdChevronRight
                onClick={slideRight}
                className='right-0  absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
        />
        </div>
    </>
  )
}

export default Scrollrow