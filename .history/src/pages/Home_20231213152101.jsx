
import React from 'react'
import Main from '../components/Main'
import Scrollrow from '../components/Scrollrow'
import requests from '../request'

const Home = () => {
  return (
    <div>
        <Main />
        <Scrollrow title="Up Coming" fetchURL={requests.requestUpcoming}/>
        <Scrollrow title="Up Coming" fetchURL={requests.requestPopular}/>
        <Scrollrow title="Up Coming" fetchURL={requests.requestTopRated}/>
        <Scrollrow title="Up Coming" fetchURL={requests.r}/>
    </div>
  )
}

export default Home