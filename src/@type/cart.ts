export interface CartType {
  id: number;
  name: string;
  price: string;
};

export type CartContextType = {
  cart: CartType[];
  setCart: React.Dispatch<React.SetStateAction<CartType[]>>
};

export interface ProductType {
  id: number;
  to: string;
  src: string;
  name: string;
  money: string;
  like: boolean;
  about?:string;
  ratting?: boolean;
}