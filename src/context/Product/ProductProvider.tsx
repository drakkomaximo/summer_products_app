import { ReactNode, FC, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import { productReducer } from "./productReducer";
import { fakeProducts } from "../../utils";

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, fakeProducts);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
