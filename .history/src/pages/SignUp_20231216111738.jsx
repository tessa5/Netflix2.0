import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute h-full w-full object-cover" src="https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?auto=webp&s=9659527da9196c27a8875200b41d20a8e901c341" alt='main' />
      
      <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
      <div className=" fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form className='w-full flex flex-col py-3'>
              <input 
                type='email' 
                className='p-3 my-2 bg-gray-600 rounded' 
                placeholder='Email' 
                autoComplete='email' />
              <input 
                type='password' 
                className='p-3 my-2 bg-gray-600 rounded'
                placeholder='Password' 
                autoComplete='current-password'/>
              <button className='bg-red-600 rounded font-bold p-2 my-6'>Sign Up</button>
              <div className='flex justify-between items-center text-sm text-gray-400'>
                <p>
                  <input type='checkbox' className='mr-2'/>Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p><span>Already subscribed to Netfli</span></p>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
    
  )
}

export default SignUp