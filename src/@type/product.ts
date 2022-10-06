import { SetStateAction } from "react";

export type ProductContextType = {
    dataUI: ProductType[];
    setDataUI: React.Dispatch<SetStateAction<ProductType[]>>;
    allData: ProductType[];
    setAllData: React.Dispatch<SetStateAction<ProductType[]>>;
    dataWishlist: ProductType[];
    setDataWishlist: React.Dispatch<SetStateAction<ProductType[]>>;
    dataRatting: ProductType[];
    setDataRatting: React.Dispatch<SetStateAction<ProductType[]>>;
}

export type ProductType = {
    id: number;
    name: string;
    avatar: string;
    money: string;
    about: string;
    wishlist: boolean;
    ratting: boolean;
}