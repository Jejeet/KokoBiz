import React from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets 3/star_icon.png"
import star_dull_icon from "../Assets 3/star_dull_icon.png"
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    //add addtocartfunction through contextapi
    const{addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdiplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-main-img" />
            </div>
        </div>
        <div className="producdisplay-right">
            <h1>
                {product.name}
            </h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdiplay-right-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem voluptatum sunt corporis repellat, saepe neque porro adipisci fugiat deserunt iste reiciendis tempore voluptatem in atque natus dicta vero harum itaque?
            </div>
            <div className="productdiplay-right-size">
                <h1>Select size</h1>
                <div className="productdiplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span> Women, T-shirt,Crop Top</p>
            <p className="productdisplay-right-category"><span>Tag :</span> Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay