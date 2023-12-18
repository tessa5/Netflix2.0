import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex w-full items-center justify-between p-4 absolute z-[80]">
        <Link to='/' >
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
        <div>
            <Link to='/'><button className='text-white pr-4'>Sign In</button></Link>
            <Link to='/'><button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar