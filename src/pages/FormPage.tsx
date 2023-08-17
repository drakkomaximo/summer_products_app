import { FC, useEffect, useId } from "react";
import { Product } from "../interfaces";
import { Header, ProductForm } from "../components";
import { useProducts } from "../hooks";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../utils";

export const FormPage: FC = () => {
  const newId = useId();
  const location = useLocation();
  const { product, goBack, addProduct, updateProduct } = useProducts();

  const handleFormSubmit = (data: Product) => {
    if (product) {
      updateProduct({
        ...data,
        id: product.id,
      });
    } else {
      addProduct({
        ...data,
        id: newId,
      });
    }
    goBack();
  };

  useEffect(() => {
    if (location.pathname === ROUTES.EDITPRODUCT && !product) {
      goBack();
    }
  }, [location, product, goBack]);

  return (
    <>
      <Header title={product ? "Edit Product" : "Create Product"} />
      <div className="container mx-auto p-4 h-full">
        <ProductForm
          onSubmit={handleFormSubmit}
          initialProduct={product}
          onBack={goBack}
        />
      </div>
    </>
  );
};
