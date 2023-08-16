import { FC, ReactNode, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { CartContext } from "./CartContext";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, Dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, Dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
