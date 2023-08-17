import { useContext } from "react";
import { ProductContext } from "../context";
import { Product } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { ROUTES, notification } from "../utils";
export const useProducts = () => {
  const navigate = useNavigate();
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProducts debe ser utilizado dentro de un ProductProvider"
    );
  }

  const { state, dispatch } = context;

  const addProduct = (product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
    notification({
      text: "Product created",
      type: "success",
    });
  };

  const selectProduct = (product: Product) => {
    dispatch({ type: "SELECT_PRODUCT", payload: product });
  };

  const updateProduct = (product: Product) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: product });
    notification({
      text: "Product updated",
      type: "success",
    });
  };

  const deleteProduct = (productId: string) => {
    dispatch({ type: "DELETE_PRODUCT", payload: productId });
    notification({
      text: "Product deleted",
      type: "success",
    });
  };

  const cleanProduct = () => {
    dispatch({ type: "CLEAN_PRODUCT" });
  };

  const goToEditProduct = (product: Product) => {
    selectProduct(product)
    navigate(ROUTES.EDITPRODUCT);
  };

  const goToDetailsProduct = (product: Product) => {
    selectProduct(product)
    navigate(ROUTES.PRODUCTDETAILS);
  };

  const goToCreateProduct = () => {
    navigate(ROUTES.CREATEPRODUCT);
    cleanProduct()
  };

  const goBack = () => {
    navigate(ROUTES.HOME);
    cleanProduct()
  };

  return {
    products: state.products,
    product: state.product,
    addProduct,
    updateProduct,
    selectProduct,
    cleanProduct,
    deleteProduct,
    goToEditProduct,
    goToCreateProduct,
    goToDetailsProduct,
    goBack,
  };
};
