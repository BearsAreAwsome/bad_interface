'use client'

import { createContext, useContext, useState } from "react"
interface CartContextType {
    cart: string[]
    setCart: (cart: string[]) => void
}
const CartContext = createContext<CartContextType>({cart: [], setCart: (()=>{})})

export function UseProvider() {
    const [cart, setCart] = useState<string[]>([])

    return (
        <CartContext.Provider value={{cart, setCart}}>
        </CartContext.Provider>
    )
}
export function useCart() {
    return useContext(CartContext)
}