import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, setCartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(function(){ 
            setCartItems([])
            setButtonText("Place Order")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: ${cartItems.length * 5.99}</p>
            <div className="order-button">
                {cartItems.length > 0 ? <button onClick={() => placeOrder()}>{buttonText}</button>:null}
            </div>    
        </main>
    )
}

export default Cart