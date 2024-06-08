import React from 'react'
import "./Navbar.css"
import logo from "../Assets 3/logo.png"

import {MenuIcon, ShoppingBagIcon} from "lucide-react"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useRef } from 'react'

const Navbar = () => {
  // usestate so i can move from one slide to another(page)

  const [menu, setMenu] = useState("shop");
  const {getTotalItems}= useContext(ShopContext);
  const navMenuRef = useRef()



  const handleShowMenu = ()=>{
    navMenuRef.current.classList.toggle("show")
    
  }

  const hideNavbarOnClickOnModal = ()=>{
      navMenuRef.current.classList.remove("show")
     
  console.log(navMenuRef.current)
  }

  return(
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>KOKO_GARB</p>
        </div>
       
       
        <div ref={navMenuRef} className={`nav_menu`} onClick={hideNavbarOnClickOnModal}>
        <ul className="nav-list"> 
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
        </div>

        <div className="nav-login-cart">
           <Link to='/login'><button>Login</button></Link> 
           <div className='cart'>
           <Link to ='/cart' className='inline-block'>
            <ShoppingBagIcon  className='cartBag'/>
            <span className="nav-cart-count">{getTotalItems()|| 0}</span>
           </Link> 
            {/* to add a counter to the cart  */}
            
           </div>
           <div className='navMedia' onClick={handleShowMenu}>
        <MenuIcon/>
      </div>
           
        </div>
        
        
        
     

    </div>
   
  )
}

export default Navbar

