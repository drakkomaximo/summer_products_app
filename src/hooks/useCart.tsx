import { useContext } from "react";
import { Product } from "../interfaces";
import { CartContext } from "../context";
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }

  const { cartState, cartDispatch } = context;

  const addToCart = (product: Product) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId: number) => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const changeQuantity = (productId: number, quantity: number) => {
    cartDispatch({ type: 'CHANGE_QUANTITY', payload: { productId, quantity } });
  };

  return { cartState, addToCart, removeFromCart, changeQuantity };
};
