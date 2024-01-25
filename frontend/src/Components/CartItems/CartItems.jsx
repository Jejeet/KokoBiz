import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import "./CartItems.css"
import remove_icon from "../Assets 3/cart_cross_icon.png"


const CartItems = () => {
  //access the data and functtin through contextAPI
  const {all_product, CartItems,removeFromCart}= useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quntity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        <div className="classitems-format">
          <img src="" alt="" className='carticon-product-icon'/>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default CartItems