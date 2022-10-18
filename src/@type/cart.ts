type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;

export interface CartType {
  id: number;
  name: string;
  money: string;
};

export type CartContextType = {
  cart: CartType[];
  setCart: Setter<CartType[]>
};

export interface ProductType {
  id: number;
  to: string;
  src: string;
  name: string;
  isAdded: boolean;
  money: string;
  like: boolean;
  about?:string;
  rating?: boolean;
}