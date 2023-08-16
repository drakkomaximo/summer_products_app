import { useContext } from "react";
import { ProductContext } from "../context";
import { Product } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils";
export const useProducts = () => {
  const navigate = useNavigate();
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProducts debe ser utilizado dentro de un ProductProvider"
    );
  }

  const { products, dispatch } = context;

  const addProduct = (product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const updateProduct = (product: Product) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: product });
  };

  const deleteProduct = (productId: string) => {
    dispatch({ type: "DELETE_PRODUCT", payload: productId });
  };

  const goToEditProduct = (productId: string) => {
    navigate(`${ROUTES.EDITPRODUCT}/${productId}`);
  };

  const goToDetailsProduct = (productId: string) => {
    navigate(`${ROUTES.PRODUCTDETAILS}/${productId}`);
  };

  const goToCreateProduct = () => {
    navigate(`${ROUTES.CREATEPRODUCT}`);
  };

  const goBack = () => {
    navigate(ROUTES.HOME);
  };

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    goToEditProduct,
    goToCreateProduct,
    goToDetailsProduct,
    goBack,
  };
};
