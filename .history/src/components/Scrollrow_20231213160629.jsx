import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Scrollrow = ({title, fetchURL}) => {
    const [movie, setMovie] = useState([])

    useEffect(()=> {
        axios.get(fetchURL).then((res) =>)
    }, [fetchURL])

  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center">
            <div id={'slider'}></div>
        </div>
    </>
  )
}

export default Scrollrow