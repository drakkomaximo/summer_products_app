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

  const { state, dispatch } = context;

  const addProduct = (product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const selectProduct = (product: Product) => {
    dispatch({ type: "SELECT_PRODUCT", payload: product });
  };

  const updateProduct = (product: Product) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: product });
  };

  const deleteProduct = (productId: string) => {
    dispatch({ type: "DELETE_PRODUCT", payload: productId });
  };

  const cleanProduct = () => {
    dispatch({ type: "CLEAN_PRODUCT" });
  };

  const goToEditProduct = (product: Product) => {
    selectProduct(product)
    navigate(`${ROUTES.EDITPRODUCT}`);
  };

  const goToDetailsProduct = (productId: string) => {
    navigate(`${ROUTES.PRODUCTDETAILS}/${productId}`);
  };

  const goToCreateProduct = () => {
    navigate(`${ROUTES.CREATEPRODUCT}`);
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
