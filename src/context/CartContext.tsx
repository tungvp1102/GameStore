import React from "react";
import useLocalStorage from "use-local-storage";
import { CartContextType, CartType } from "../@type/cart";
import { ProductType } from "../@type/product";
// import { getData } from "../method";

type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;

export const CartContext = React.createContext<CartContextType>({} as CartContextType);

export const handleAddCart = (
    id: number,
    allData: ProductType[],
    setAllData: React.Dispatch<React.SetStateAction<ProductType[]>>,
    cart: CartType[],
    setCart: Setter<CartType[]>,
  ) => {
    let elements = [...allData];
    elements = elements.map((item) =>
      item.id === id ? { ...item, inCart: true } : item
    );
    setAllData(elements);
    setCart([{ id: id, name: allData[id].name, money: allData[id].price }, ...cart]);
  };

type PropChildren = {
    children: React.ReactNode;
};

const CartProvider: React.FC<PropChildren> = ({ children }) => {
    const [cart, setCart] = useLocalStorage<CartType[]>(
        'carts',
        []
      );
    
    // const [cart, setCart] = React.useState<CartType[]>([]);
    return ( 
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;