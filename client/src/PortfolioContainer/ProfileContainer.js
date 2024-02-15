import React from 'react'
import { TOTAL_SCREENS } from '../utilities/commonUtils'
import Footer from './Footer/footer'
import Header from './Home/Header/Header'


export default function ProfileContainer() {
    const mapAllScreens = ()=>{
        return(
            TOTAL_SCREENS.map((screen)=>(
                (screen.Component) ? <screen.Component screen_name = {screen.screen_name}key = {screen.screen_name} id = {screen.screen_name}/>
                : <div key = {screen.screen_name}></div>
            ))
        )
    }
  return (
    <>
    <Header/>
    <div  className='profile-container'>{mapAllScreens()}</div>
    <Footer/>
    </>
    
    
  )
}
