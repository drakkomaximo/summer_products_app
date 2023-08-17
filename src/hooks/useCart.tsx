import { useContext } from "react";
import { Product } from "../interfaces";
import { CartContext } from "../context";
import { notification } from "../utils";
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }

  const { cart, Dispatch } = context;

  const addToCart = (product: Product) => {
    Dispatch({ type: 'ADD_TO_CART', payload: product });
    notification({
      text: "Product added to cart",
      type: "success",
    });
  };

  const removeFromCart = (productId: string) => {
    Dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    notification({
      text: "Product removed from Cart",
      type: "success",
    });
  };

  const changeQuantity = (productId: string, quantity: number) => {
    Dispatch({ type: 'CHANGE_QUANTITY', payload: { productId, quantity } });
  };

  const isProductInCart = (productId: string) =>{
    return !!cart.find((item) => item.product.id === productId)
  }

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalIPricetemsInCart = cart.reduce(
    (total, item) => total + (item.quantity* item.product.price),
    0
  );

  return { cart, addToCart, removeFromCart, changeQuantity, isProductInCart, totalItemsInCart, totalIPricetemsInCart };
};
