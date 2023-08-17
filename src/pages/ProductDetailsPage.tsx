import { FC, useEffect } from "react";
import { useCart, useProducts } from "../hooks";
import { Header, ProductDetail } from "../components";
import { ROUTES } from "../utils";
import { useLocation } from "react-router-dom";

export const ProductDetailsPage: FC = () => {
  const location = useLocation()
  const { product, deleteProduct, goToEditProduct, goBack } = useProducts();
  const { isProductInCart, removeFromCart, addToCart } = useCart();

  const handleDelete = () => {
    if (product) {
      deleteProduct(product.id);
      goBack();
    }
  };

  const addProductTocart = () => {
    if (product) {
      addToCart(product);
    }
  };
  
  const handleDeleteFromCart = () => {
    if (product) {
      removeFromCart(product.id);
    }
  };

  const handleEdit = () => {
    if (product) {
      goToEditProduct(product);
    }
  };

  useEffect(() => {
    if (location.pathname === ROUTES.PRODUCTDETAILS && !product) {
      goBack();
    }
  }, [location, product, goBack]);

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <>
      <Header title={'Product Details'} />
      <section className="flex flex-col justify-center items-center w-screen h-full">
        <ProductDetail
          addProductTocart={addProductTocart}
          handleDeleteFromCart={handleDeleteFromCart}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          product={product}
          isProductInCart={isProductInCart(product.id)}
        />
      </section>
    </>
  );
};
