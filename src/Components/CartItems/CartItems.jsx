import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import "./CartItems.css"
import { X } from "lucide-react"
import Button from '../Button/Button'



const CartItems = () => {
  //access the data and functtin through contextAPI
  const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext)
  return (
    <div className='cartitems' >
     <div> 
      <table>
        <tr className="cartitems-format-main">
          <th>Products</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
        {all_product.map((e)=>{
          if (cartItems[e.id]>0){
            return <tr className=" cartitems-format-main">
            <td><img src={e.image} alt="" className='carticon-product-icon'/></td>
            <td>{e.name}</td>
            <td>${e.new_price}</td>
            <td> <button className='cartitems-quantity'>{cartItems[e.id]}</button></td>
            <td>${e.new_price*cartItems[e.id]}</td>
            <td>< X     onClick={()=>{removeFromCart(e.id)}}/></td>
          </tr>
          }
          return null;
        })}
        
      </table>
      </div>
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h3>Order Summary</h3>
          <table>
            <tr className="cartitems-total-item">
              <td>Sub-Total</td>
              <td>${getTotalCartAmount()}</td>
            </tr>
            <hr />
            <tr className="cartitems-total-item">
              <td>Shipping Fee</td>
              <td>Free</td>
            </tr>
            <hr />
            <tr className="cartitems-total-item">
             <td> <h3>Total</h3></td>
          <td><h3>${getTotalCartAmount()}</h3> </td>
            </tr>
          </table>
          <Button size='medium'>PROCEED TO CHECKOUT</Button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promo code,Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promocode'/>
            <Button size='small'>Submit</Button>
          </div>
        </div>
      </div> 
      
    </div>
  )
}

export default CartItems

//what's next is the cart total value. create a finction in the shopcontext file