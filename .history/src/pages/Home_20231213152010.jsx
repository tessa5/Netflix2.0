
import React from 'react'
import Main from '../components/Main'
import Scrollrow from '../components/Scrollrow'
import requests from '../request'

const Home = () => {
  return (
    <div>
        <Main />
        <Scrollrow title="Up Coming" fetchURL={requests}/>
        <Scrollrow />
    </div>
  )
}

export default Home