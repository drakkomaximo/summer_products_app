import { ReactNode, FC, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import { productReducer } from "./productReducer";
import { fakeProducts } from "../../utils";

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    product: null,
    products: fakeProducts
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
