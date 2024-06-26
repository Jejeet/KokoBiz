import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import "./CartItems.css"
import { X } from "lucide-react"



const CartItems = () => {
  //access the data and functtin through contextAPI
  const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) =>{
        if(cartItems[e.id]>0)
{
           return <div>
        <div className="classitems-format cartitems-format-main">
          <img src={e.image} alt="" className='carticon-product-icon'/>
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
          <p>${e.new_price*cartItems[e.id]}</p>
          < X     onClick={()=>{removeFromCart(e.id)}}/>
          {/* <span className='cartitems-remove-icon'  onClick={()=>{removeFromCart(e.id)}} alt="" >
          
          </span> */}
        </div>
        <hr />
      </div>
        } 
          return null;
        
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Sub-Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
          <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promo code,Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promocode'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems

//what's next is the cart total value. create a finction in the shopcontext file