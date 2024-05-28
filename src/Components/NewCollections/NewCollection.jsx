import React from 'react'
import './NewCollection.css'
import new_collection from "../Assets 3/new_collections"
import Section from '../layouts/Section'
import ProductList from '../products/ProductList'
import SectionHeader from '../layouts/SectionHeader'

const NewCollection = () => {
  return (
    <Section>
      <SectionHeader>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        </SectionHeader>
        <ProductList products={new_collection}/>
   
    </Section>
  )
}

export default NewCollection