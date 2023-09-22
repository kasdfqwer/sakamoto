import React from 'react'
import { Link } from 'react-router-dom'

const IntroPage = () => {
  return (
    <div className='wrap'>
      <Link to='Announce' className="Intro">
        <div className="mainbg"></div>
        <h1>sitesakamoto</h1>
      </Link>
    </div>
  )
}

export default IntroPage
