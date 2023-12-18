import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/Auth'

const NavBar = () => {
  const { user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () =>{
    try {
      await logOut()
      navigate('/')
    }catch(err) {
      console.log(err)
    }
  }
  return (
    <div className="flex w-full items-center justify-between p-4 absolute z-[80]">
        <Link to='/' >
          <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        </Link>
        {user?.email ? (
           <div>
           <Link to='/account'><button className='text-white pr-4'>Account</button></Link>
           <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Logout</button></Link>
       </div>
        ) : (
          <div>
            <Link to='/signin'><button className='text-white pr-4'>Sign In</button></Link>
            <Link to='/signup'><button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Sign Up</button></Link>
        </div>
        )
      }
        
    </div>
  )
}

export default NavBar