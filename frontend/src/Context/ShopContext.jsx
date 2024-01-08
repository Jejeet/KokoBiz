import React, {createContext} from "react";
import { createContext } from "react";
import all_product from "../Components/Assets 3/all_product"

export const ShopContext = createContext(null);

ShopContextProvider = (props)=>{
    const contextValue ={all_product};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
    )
}
export default ShopContextProvider;