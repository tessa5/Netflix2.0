import React from 'react'

const NavBar = () => {
  return (
    <div className="flex w-fitems-center justify-between p-4 absolute z-[80]">
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar