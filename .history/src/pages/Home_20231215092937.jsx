
import React from 'react'
import Main from '../components/Main'
import Scrollrow from '../components/Scrollrow'
import requests from '../request'

const Home = () => {
  return (
    <div>
        <Main />
        <Scrollrow rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming}/>
        <Scrollrow rowID="2" title="Popular" fetchURL={requests.requestPopular}/>
        <Scrollrow rowID="3" title="Top Rated" fetchURL={requests.requestTopRated}/>
        <Scrollrow rowID="1" title="Trending" fetchURL={requests.requestTrending}/>
    </div>
  )
}

export default Home