import { useContext } from "react";
import { Product } from "../interfaces";
import { CartContext } from "../context";
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }

  const { cart, Dispatch } = context;

  const addToCart = (product: Product) => {
    Dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId: string) => {
    Dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const changeQuantity = (productId: string, quantity: number) => {
    Dispatch({ type: 'CHANGE_QUANTITY', payload: { productId, quantity } });
  };

  return { cart, addToCart, removeFromCart, changeQuantity };
};