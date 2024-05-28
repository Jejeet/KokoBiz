import React from 'react'
import "./RelatedProducts.css"
import data_product from '../Assets 3/data'
import ProductList from '../products/ProductList'
import SectionHeader from '../layouts/SectionHeader'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <SectionHeader>
        <h1>Related Products</h1>
        <hr />
        </SectionHeader>
        <ProductList products={data_product} className="relatedproducts-item"/>
        
    </div>
  )
}

export default RelatedProducts

//to be mounted in the product page