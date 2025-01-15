import React from 'react'
import "./HomePageImage.css"
import { assets } from '../../assets/assets'

export const HomePageImage = () => {
  return (
    <div className='homepage-image'>
        <img src={assets.homePageImage} alt="" />
        <h1>Travel Limitless</h1>
        <p>Explore Beyond Boundaries with TravelSphere: Your Gateway to Infinte Journeys.</p>
    </div>
  )
}
