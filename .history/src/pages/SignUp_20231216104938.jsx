import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block h-full w-full object-cover" src="https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?auto=webp&s=9659527da9196c27a8875200b41d20a8e901c341" alt='main' />
      </div>
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <div className="w-full fixed px-4 py-42 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className='max-w-[320px] mx-auto py-'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default SignUp