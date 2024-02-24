import React from 'react'
import "./Navbar.css"
import logo from "../Assets 3/logo.png"
import cart_icon from "../Assets 3/cart_icon.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  // usestate so i can move from one slide to another(page)
  const [menu, setMenu] = useState("shop");
  const {getTotalItems}= useContext(ShopContext);
  return(
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>KOKO_GARB</p>
        </div>
        <ul className="nav-menu"> 
        {/* add onclick to each of them and a function set to set menu*/}
        {/* the hr was fist included manually to style on shop but
         then removed and included as a condition using ternary operators
         " {menu=== "shop"?<hr/>:<></>}" this way, the hr(the underline 
         will move to each page of the menu clicked) */}

         {/* use the link tag to connect the routes to the nav */}
           <li onClick={()=> {setMenu("shop")}}> <Link  style={{textDecoration:'none'}} to = '/'>Shop</Link>  {menu=== "shop"?<hr/>:<></>}</li>
           <li onClick={()=> {setMenu("men")}}><Link style={{textDecoration:'none'}} to = '/men'>Men</Link> {menu=== "men"?<hr/>:<></>}</li>
           <li onClick={()=> {setMenu("women")}}><Link style={{textDecoration:'none'}} to = '/women'>Women</Link>{menu=== "women"?<hr/>:<></>}</li>
           <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration:'none'}} to ='/kids'>Kids</Link> {menu=== "kids"?<hr/>:<></>}</li> 
        </ul>
        <div className="nav-login-cart">
           <Link to='/login'><button>Login</button></Link> 
           <Link to ='/cart'><img src={cart_icon} alt="" /></Link> 
            {/* to add a counter to the cart  */}
            <div className="nav-cart-count">{getTotalItems()}</div>
        </div>

    </div>
  )
}

export default Navbar