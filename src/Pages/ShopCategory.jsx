import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import "./CSS/ShopCategory.css"
import {ChevronDown} from "lucide-react"
import ProductList from '../Components/products/ProductList'
import SectionHeader from '../Components/layouts/SectionHeader'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  const filteredProduct = all_product.filter((item)=> (props.category===item.category))

  return (
    <div className='shop-category'>
      {/* html structure for the shop category page */}
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <SectionHeader className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products 
        </p>
        <div className="shopcategory-sort">
         <span> Sort by</span> <ChevronDown />
        </div>
      </SectionHeader>
        <ProductList products={filteredProduct} className="shopcategory-products"/>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory