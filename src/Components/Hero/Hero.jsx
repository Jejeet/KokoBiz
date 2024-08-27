import React from 'react'
import hand_icon from '../Assets 3/hand_icon.png'
import "./Hero.css"
import {MoveRight} from "lucide-react"
import hero_image from '../Assets 3/hero_image.png'
import Button from '../Button/Button'
import Section from '../layouts/Section'
const Hero = () => {
  return (
    <div className='shop-hero'>
    <Section>
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <h1>new</h1>
                    <img src={hand_icon} alt="" />
                </div>
                <h1>collections <br/> for everyone</h1>
               
            </div>
            {/* button */}
            <Button className="" size='medium'>
                <span>Latest Collection</span>
                <MoveRight />
            </Button>

        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />

        </div>

    </div>
    </Section>
    </div>
  )
}

export default Hero

// After creating the hero Component, 
// go ahead and mount it 
// in shop component under pages