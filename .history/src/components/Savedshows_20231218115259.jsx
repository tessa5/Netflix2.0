import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Savedshows = () => {
  return (
    <div>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center">
        <MdChevronLeft
            onClick={slideLeft}
            className='bg-white  left-0 rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-10  group-hover:block'
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
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block'
                size={40}
        />
        </div>
    </div>
  )
}

export default Savedshows