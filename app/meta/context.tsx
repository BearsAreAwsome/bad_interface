'use client'

import { createContext, ReactNode, useContext, useState } from "react"
interface CartContextType {
    cart: string[]
    setCart: (cart: string[]) => void
}
const CartContext = createContext<CartContextType>({cart: [], setCart: ()=>{}})

export function CartProvider({children} : {children: ReactNode}) {
    const [cart, setCart] = useState<string[]>([])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export function useCart() {
    return useContext(CartContext)
}