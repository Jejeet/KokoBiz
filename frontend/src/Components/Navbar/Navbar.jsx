import React from 'react'
import "./Navbar.css"
import logo from "../Assets 3/logo.png"
import cart_icon from "../Assets 3/cart_icon.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // usestate so i can move from one slide to another(page)
  const [menu, setMenu] = useState("shop");
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
           <li onClick={()=> {setMenu("shop")}}> <Link to = '/'>Shop</Link>  {menu=== "shop"?<hr/>:<></>}</li>
           <li onClick={()=> {setMenu("men")}}><Link to = '/men'>Men</Link> {menu=== "men"?<hr/>:<></>}</li>
           <li onClick={()=> {setMenu("women")}}><Link to = '/women'>Women</Link>{menu=== "women"?<hr/>:<></>}</li>
           <li onClick={()=> {setMenu("kids")}}><Link to ='/kids'>Kids</Link> {menu=== "kids"?<hr/>:<></>}</li> 
        </ul>
        <div className="nav-login-cart">
           <Link to='/login'><button>Login</button></Link> 
           <Link to ='/cart'><img src={cart_icon} alt="" /></Link> 
            {/* to add a counter to the cart  */}
            <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}

export default Navbar