import React from 'react'
import './Breadcrum.css'
import arrow_icon from "../Assets 3/breadcrum_arrow.png"
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" />
         SHOP 
         {product.categorey} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum

//mount this page in the product page