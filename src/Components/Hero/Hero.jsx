import React from 'react'
import hand_icon from '../Assets 3/hand_icon.png'
import "./Hero.css"
import {MoveRight} from "lucide-react"
import hero_image from '../Assets 3/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <MoveRight />
            </div>

        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />

        </div>

    </div>
  )
}

export default Hero

// After creating the hero Component, 
// go ahead and mount it 
// in shop component under pages