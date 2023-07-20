import React from "react";

import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";
import "./navbar.css";

export const NavBar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <h1>Saad's Shop</h1>
            </div>
            <div className="end">
                <Link to={"/"} className="link-style">Shop</Link>
                <Link to={"/cart"} className="link-style">
                    <ShoppingCart size={25}/>
                </Link>
            </div>
        </div>
    )
}