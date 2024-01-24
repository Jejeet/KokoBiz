import React, {createContext} from "react";
import { useState } from "react";

import all_product from "../Components/Assets 3/all_product"

export const ShopContext = createContext(null);

//for add to cart. using this context, we can access the add to cart data in any component

const getDefaultCart = () =>{
    let cart = {};
    for(let index = 0; index < all_product.length+1; index++){
        cart [index] =0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems]= useState(getDefaultCart());
    // const contextValue ={all_product,cartItems};

    const addToCart = () =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    
    const removeFromCart = () =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    
    
    const contextValue ={all_product,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
    )
}
export default ShopContextProvider;