import {createContext, useState } from "react";

const CartContext = createContext()

const ThemeProvider = ({children})=> {
    const [wishCount, setWishCount] = useState(0)
    return (
        <CartContext.Provider value={{wishCount, setWishCount}}>
            {children}
        </CartContext.Provider>
    )
}
export {ThemeProvider, CartContext}