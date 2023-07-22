import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart = () => {
    const {cartItems, getToCartAmount} = useContext(ShopContext);
    console.log(cartItems)
    let totalAmount = getToCartAmount();
    return(
        <div className="cart">
            <div><h1 className="title">Your Cart Item</h1></div>
            <div className="cartItem">
                 {PRODUCTS.map((product) =>{
                    if(cartItems[product.id] !== 0){
                        return <CartItem data={product}/>
                    }
                    return null;
                })} 
                <div className="checkout">
                    <p>Subtotal: Rs {totalAmount}</p>
                    <button>Continue</button>
                    <button>Checkout</button>
                </div>
            </div>

        </div>
    )
}