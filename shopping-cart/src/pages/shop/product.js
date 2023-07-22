import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


export const Product = (props) => {
    const { id, productName, productImage, price } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];


    return (

        <div className="product">
            <img src={productImage} alt="product"/>
            <div className="description">
                <p>
                    <b>
                        {productName}

                    </b></p>
                <p>
                    <b>
                        Rs {price}

                    </b>
                </p>
            </div>
            <button className="addToCartBtn" onClick={()=> addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
        </div>
    )
}