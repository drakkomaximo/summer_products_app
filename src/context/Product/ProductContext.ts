import { Dispatch, createContext } from "react";
import { ProductState, ProductAction } from "../../interfaces";

interface ProductContextProps {
  products: ProductState;
  dispatch: Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);
