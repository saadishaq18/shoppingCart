import React from "react";
import {PRODUCTS} from '../../products';
import { Product } from "./product";

export const Shop = () => {
    return(
        <div className="shop">
            <div className="productCard">
                {PRODUCTS.map((product)=>(
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}