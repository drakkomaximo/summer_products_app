import { useContext } from "react";
import { ProductContext } from "../context";
import { Product } from "../interfaces";
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProducts debe ser utilizado dentro de un ProductProvider"
    );
  }
  
  const { products, dispatch } = context;

  const addProduct = (product: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const updateProduct = (product: Product) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: product });
  };

  const updateProductQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: {productId, quantity} });
  };

  const deleteProduct = (productId: string) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: productId });
  };

  return { products, addProduct, updateProduct, deleteProduct, updateProductQuantity };
};
