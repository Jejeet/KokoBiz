import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import "./CartItems.css"
import remove_icon from "../Assets 3/cart_cross_icon.png"


const CartItems = () => {
  //access the data and functtin through contextAPI
  const {all_product,cartItems,removeFromCart}= useContext(ShopContext)
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
      {all_product.map((e) =>{
        if(cartItems[e.id]>0)
{
           return <div>
        <div className="classitems-format">
          <img src={e.image} alt="" className='carticon-product-icon'/>
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
          <p>{e.new_price*cartItems[e.id]}</p>
          <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
      </div>
        } 
        else{
          return <div>
            no item found
          </div>
        }
      })}
    </div>
  )
}

export default CartItems