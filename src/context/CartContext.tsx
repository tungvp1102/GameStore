import React from "react";

import { CartContextType, CartType } from "../@type/cart";
import { getData } from "../method";

export const CartContext = React.createContext<CartContextType>({} as CartContextType);

type PropChildren = {
    children: React.ReactNode;
};

const CartProvider: React.FC<PropChildren> = ({ children }) => {
    const [cart, setCart] = React.useState<CartType[]>([]);
    React.useEffect(() => {
        getData("cart").then((res) => {
          setCart(res?.data);
        });
      }, []);

    return ( 
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;