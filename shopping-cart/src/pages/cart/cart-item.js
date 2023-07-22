import React, { useContext } from "react";
import './cart.css'
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) =>{
    console.log("props",props)
    const {id, productName,price,productImage}= props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
    return(
        <div className="cartItems">
            <img src={productImage} alt="product"/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>Rs {price}</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                    <input value={cartItems[id]}/>
                    <button onClick = {()=>addToCart(id)}>+</button>
                </div>
            </div>

        </div>
    )
}