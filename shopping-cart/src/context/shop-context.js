import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products'
//import { Product } from '../pages/shop/product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getToCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            console.log(item)
            if (cartItems[item] > 0 && item !== 'itemId') {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, itemId: prev[itemId]++ }));
        delete(cartItems?.itemId);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, itemId: prev[itemId]-- }));
    }

    const contextValue = { cartItems, addToCart, removeFromCart, getToCartAmount }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}