import { FC } from "react";
import { useCart, useProducts } from "../hooks";
import { Header, ProductDetail } from "../components";

export const ProductDetailsPage: FC = () => {
  const { product, deleteProduct, goToEditProduct, goBack } = useProducts();
  const { isProductInCart, removeFromCart } = useCart();

  const handleDelete = () => {
    if (product) {
      deleteProduct(product.id);
      goBack();
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

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <>
      <Header title={'Product Details'} />
      <section className="flex flex-col justify-center items-center w-screen h-full">
        <ProductDetail
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
