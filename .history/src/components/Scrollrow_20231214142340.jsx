import axios from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
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

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
      };

  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center">
            <div 
                id={'slider' =}
                className='w-full h-full relative whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'
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