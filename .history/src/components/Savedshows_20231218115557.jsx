import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Savedshows = () => {

    
  return (
    <div>
        <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
        <div className="relative flex items-center">
        <MdChevronLeft
            onClick={slideLeft}
            className='bg-white  left-0 rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-10  group-hover:block'
            size={40}
            />
            <div 
                id={'slider'}
                className='w-full h-full relative whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'
                >
                {movie.map((item, id) =>(
                    <div className="2-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                    <img
                        className='w-full h-auto block'
                        src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item.title}/>
                    <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white'>
                        <p className='text-xs md:text-small font-bold flex justify-center h-full items-center'>{item?.title}</p>
                        
                    </div>
                </div>
)
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