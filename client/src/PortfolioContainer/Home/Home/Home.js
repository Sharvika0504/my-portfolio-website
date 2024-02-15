import React from 'react'
import Profile from '../Profile/Profile'
import './Home.css'

export default function Home(props) {
  return (
    <div className='home-container' id={props.id || ""}>
        <Profile/>
    </div>
  )
}
