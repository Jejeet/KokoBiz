import React from 'react'
import './Popular.css'
import data_product from "../../../Assets 3/data"
import Item from '../Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((item,i) => {
         return <Item  key={i} id ={item.id} name={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular

//we have provided all the props here fro the data file
// mount it in the shop page