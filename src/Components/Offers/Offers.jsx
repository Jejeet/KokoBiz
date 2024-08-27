import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets 3/exclusive_image.png'
import Button from '../Button/Button'
import Section from '../layouts/Section'

const Offers = () => {
  return (

    <div className='offer-bg'>
    <Section>
    <div className='offers'>
        <div className="offers-left">
           <h1>Exclusive <br/> Offers For You </h1>
           <p>BEST OF ALL TIME</p>
           <Button size='medium'>Check Now</Button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />

        </div>
    </div>
    </Section>
    </div>
  )
}

export default Offers