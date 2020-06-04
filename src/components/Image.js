import React, {useState, useContext} from 'react'
import Proptypes from 'prop-types'
import {Context} from "../Context"

export default function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context)

    // 

    function heartIcon() {
        if(img.isFavorite) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i onClick={() => removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        }
        else if (hovered) {
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }
    

                        
    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            {heartIcon()}
            {cartIcon()}
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

Image.propTypes = {
    className: Proptypes.string,
    img: Proptypes.shape({
        id: Proptypes.string.isRequired,
        url: Proptypes.string.isRequired,
        isFavorite: Proptypes.bool
    })
}