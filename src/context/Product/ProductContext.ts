import { Dispatch, createContext } from "react";
import { ProductsState, ProductAction } from "../../interfaces";

interface ProductContextProps {
  state: ProductsState;
  dispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);
