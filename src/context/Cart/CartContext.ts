import { Dispatch, createContext } from "react";
import { CartAction, CartState } from "../../interfaces";

interface CartContextProps {
  cart: CartState;
  Dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);
