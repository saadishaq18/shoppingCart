import React from "react";

export const Product = (props) =>{
    const {id, productName, productImage, price} = props.data;
    return(
        
        <div className="product">
            <img src={productImage} />
        <div className="description">
            <p>
                <b>
            {productName}

                </b></p>
                <p>
                    <b>
            {price}

                    </b>
                </p>
        </div>
        </div>
    )
}