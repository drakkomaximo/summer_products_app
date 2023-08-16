import { Dispatch, createContext } from "react";
import { CartAction, CartState } from "../../interfaces";

interface CartContextProps {
  cartState: CartState;
  cartDispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);
