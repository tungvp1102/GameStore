import { ProductContextType, ProductType } from "../@type/product";
import { getData } from "../method";
import React from "react";

export const ProductContext = React.createContext<ProductContextType>(
  {} as ProductContextType
);

type PropChildren = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<PropChildren> = ({ children }) => {
  const [dataWishlist, setDataWishlist] = React.useState<ProductType[]>([]);
  const [dataUI, setDataUI] = React.useState<ProductType[]>([]);
  
  React.useEffect(() => {
    getData("").then((res) => {
        setDataUI(res?.data);
      });
    getData("?wishlist=true").then((res) => {
      setDataWishlist(res?.data);
    });
  });

  return (
    <ProductContext.Provider
      value={{
        dataUI,
        setDataUI,
        dataWishlist,
        setDataWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
