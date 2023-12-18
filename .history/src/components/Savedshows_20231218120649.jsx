import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/Auth'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

const Savedshows = () => {
    const [movies, setMovies] = useState([])
    const { user } = UserAuth()

    useEffect(() =>{
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.Savedshows)
        })
    }, [user?.email])

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
        }
        const slideRight = () => {
            var slider = document.getElementById('slider')
            slider.scrollLeft = slider.scrollLeft + 500;
        }

        const movieRef = doc(db, 'users', `${user?.email}`)
        const deleteShow = async (passedID) => {
            try {
                const result = movies.filter((item) => item.id !== passedID)
                await updateDoc
            }
        }

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
                        {movies.map((item) => (
                    <div
                    key={item.id}
                    className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
                    >
                    <img
                        className='w-full h-auto block'
                        src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                        alt={item?.title}
                    />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                        {item?.title}
                        </p>
                        <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                    </div>
                    </div>
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