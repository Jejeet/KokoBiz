import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import DescriptionBox from '../Components/DescriptioBox/DescriptionBox';
import ProductDisplay from '../Components/Product display/ProductDisplay';
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  //grab all data using context
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product ={product}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product


//link the item image with the product...(that is to be done on the item compo.)