import { FC, ReactNode, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
