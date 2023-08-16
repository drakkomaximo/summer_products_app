import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces";
import { useCart, useProducts } from "../hooks";
import { ProductDetail } from "../components";

export const ProductDetailsPage: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, deleteProduct, goToEditProduct, goBack } = useProducts()
  const { isProductInCart } = useCart()
  /* const cartItem = cart.find((item) => item.product.id === product.id); */

  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct);
  }, [products, productId]);

  const handleDelete = () => {
    if (product) {
      deleteProduct(product.id);
      goBack();
    }
  };

  const handleEdit = () => {
    if (product) {
      goToEditProduct(product.id)
    }
  };

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <section className="flex flex-col justify-center items-center w-screen h-full">
      <h1 className="text-5xl">Product Details</h1>
      <ProductDetail handleDelete={handleDelete} handleEdit={handleEdit} product={product} goBack={goBack} isProductInCart={isProductInCart(product.id)} />
    </section>
  );
};
