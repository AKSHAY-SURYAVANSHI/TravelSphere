import React from 'react'
import { assets } from '../../assets/assets'
import './StayCarousel.css'

const StayCarousel = () => {
    return (
        <div className="carousel-container">
            <img src={assets.stayCarousel} alt='' />
            <h1>Experience Stays Beyound Norms</h1>
        </div>
    )
}

export default StayCarousel