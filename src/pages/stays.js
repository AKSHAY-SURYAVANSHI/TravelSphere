import React from 'react'
import './stays.css'
import NavBar from '../components/NavBar/NavBar'
import StayCarousel from '../components/stayCarousel/StayCarousel'
import StayCards from '../components/StayCards/StayCards'

const stays = () => {
  
  return (
    <div className="stay-container">
        <NavBar/>
        <StayCarousel/>
        <StayCards/>
    </div>
  )
}

export default stays
