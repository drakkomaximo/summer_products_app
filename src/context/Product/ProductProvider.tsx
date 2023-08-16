import { ReactNode, FC, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import { productReducer } from "./productReducer";

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
