import React from 'react'
import './Breadcrum.css'
import {ChevronRight} from "lucide-react"
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME  <ChevronRight />
         SHOP 
         {product.categorey} <ChevronRight /> {product.name}
    </div>
  )
}

export default Breadcrum

//mount this page in the product page