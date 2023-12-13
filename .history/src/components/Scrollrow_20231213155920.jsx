import React from 'react'

const Scrollrow = ({title, fetchURL}) => {
  return (
    <>
        <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex it">
            <div></div>
        </div>
    </>
  )
}

export default Scrollrow