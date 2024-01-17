import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets 3/star_icon.png"
import star_dull_icon from "../Assets 3/star_dull_icon.png"

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdiplay-left">
            <div className="productdisplay-img-list">
                <img src={product.props} alt="" />
                <img src={product.props} alt="" />
                <img src={product.props} alt="" />
                <img src={product.props} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="producdisplay-right">
            <h1>
                {product.name}
            </h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay