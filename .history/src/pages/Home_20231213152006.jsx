
import React from 'react'
import Main from '../components/Main'
import Scrollrow from '../components/Scrollrow'

const Home = () => {
  return (
    <div>
        <Main />
        <Scrollrow title="Up Coming" fetchURL={requ}/>
        <Scrollrow />
    </div>
  )
}

export default Home