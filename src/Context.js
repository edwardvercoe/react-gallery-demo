import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(
                result => {
                    setAllPhotos(result)
                },
                error => {
                    console.log("error")
                }
            )
    }, [])

    function toggleFavorite(id) {
        const updatedData = allPhotos.map(photo => {
            if (photo.id === id) {
                return {...photo,
                    isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedData)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }


    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems,removeFromCart, setCartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}