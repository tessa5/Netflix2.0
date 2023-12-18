import React from 'react'

const Account = () => {
  return (
    <div className="w-full text-white">
       <img 
          className="h-[400px] w-full object-cover" 
          src="https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?auto=webp&s=9659527da9196c27a8875200b41d20a8e901c341" 
          alt='main' />
          <div className="w-full absolute top-0 left-0 bg-black/50 h-1/2"></div>
          <div className="absolute top-[20%]">
            <h1 className="text-3xl md:"> My Shows</h1>
          </div>
    </div>
  )
}

export default Account