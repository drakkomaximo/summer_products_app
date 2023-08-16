import { FC } from "react";
import { useCart, useProducts } from "../hooks";
import { FaShoppingBasket } from "react-icons/fa"; // Importar el icono de React Icons
import ProductItem from "./ProductItem";

export const ProductsList: FC = () => {
  const { products } = useProducts();
  const { addToCart, cart, removeFromCart, changeQuantity } = useCart();

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Lista de Productos
      </h2>
      {products.length === 0 ? (
        <div className="flex">
          <FaShoppingBasket className="text-4xl text-gray-400 mr-2" />
          <p>There are no products, yet</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              addToCart={addToCart}
              cart={cart}
              product={product}
              removeFromCart={removeFromCart}
              updateQuantity={changeQuantity}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
