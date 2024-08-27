import React from 'react'
import Button from '../Button/Button'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subcribe to our newsletter and stay updated </p>
        <div>
            <input type="email" placeholder='Your Email Id'/>
            <Button className="medium">Subscribe</Button>
        </div>
    </div>
  )
}

export default NewsLetter