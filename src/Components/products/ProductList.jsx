import React from 'react'
// import ReactDOM from 'react-dom/client';
import './ProductList.css'
import Product from './Product'

const ProductList = ({products = [], className=''}) => {
  

  return (
        <div className={`products ${className}`}>
         
            {products.map((item,i)=>{
                return <Product key={i} id ={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}
        </div>
  )
}

export default ProductList