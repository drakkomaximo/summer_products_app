import { FC } from "react";
import { Product } from "../interfaces";
import { ProductForm } from "../components";
import { useProducts } from "../hooks";

export const FormPage: FC = () => {
  const { product, goBack, addProduct, updateProduct} = useProducts();

  const handleFormSubmit = (data: Product) => {
    if (product) {
      updateProduct(data);
    } else {
      addProduct(data);
    }
    goBack()
  };

  return (
    <div className="container mx-auto p-4 h-full">
      <ProductForm
        onSubmit={handleFormSubmit}
        initialProduct={product}
        onBack={goBack}
      />
    </div>
  );
};
