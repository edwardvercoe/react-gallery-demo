import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)
    let cartIcon

    if (cartItems.length !== 0) {
        cartIcon = <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
    } else {
        cartIcon = <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    }
    
    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                {cartIcon}
            </Link>
        </header>
    )
}

export default Header
