import React from "react";

import { CartContextType, CartType } from "../@type/cart";

export const CartContext = React.createContext<CartContextType>({} as CartContextType);

type PropChildren = {
    children: React.ReactNode;
};

const CartProvider: React.FC<PropChildren> = ({ children }) => {
    const [cart, setCart] = React.useState<CartType[]>([]);
        
    return ( 
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
}


export default CartProvider;