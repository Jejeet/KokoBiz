import React from 'react'
import './Popular.css'
import data_product from "../../../Assets 3/data"
import Section from '../../../layouts/Section'
import ProductList from '../../../products/ProductList'

const Popular = () => {
  return (
    <Section>
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <ProductList products={data_product}/>
    </div>
    </Section>
  )
}

export default Popular

//we have provided all the props here fro the data file
// mount it in the shop page