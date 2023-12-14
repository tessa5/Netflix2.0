import axios from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import Moviefile from './Moviefile'

const Scrollrow = ({title, fetchURL, rowID}) => {
    const [movie, setMovie] = useState([])
    

    useEffect(()=> {
        axios.get(fetchURL).then((res) =>{
            setMovie(res.data.results)
        })
    }, [fetchURL])
    console.log(movie)

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
        <MdChevronLeft
            onClick={slideLeft}
            className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
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
            <MdChevronRight
                onClick={slideRight}
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
        />
        </div>
    </>
  )
}

export default Scrollrow