import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Hero/Item/Popular/Popular'
import NewCollection from '../Components/NewCollections/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Offers from '../Components/Offers/Offers'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers />
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop