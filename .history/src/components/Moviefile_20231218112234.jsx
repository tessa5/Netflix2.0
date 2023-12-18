import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/Auth'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Moviefile = ({item}) => {
    const [liked, setLiked] = useState(false)
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth()

    const movieID = doc(db, 'users', `${user?.email}`)
    const saveShow = async () => {
        if(user?.email) {
            
        }
    }

  return (
    <div className="2-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                        <img
                            className='w-full h-auto block'
                            src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item.title}/>
                        <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white'>
                            <p className='text-xs md:text-small font-bold flex justify-center h-full items-center'>{item?.title}</p>
                            <p>
                                {liked ? <FaHeart className='absolute top-4 left-4 text-gray-400' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-400' />}
                            </p>
                        </div>
                    </div>
  )
}

export default Moviefile