import { FC } from "react";
import { useCart, useProducts } from "../hooks";
import { FaShoppingBasket } from "react-icons/fa"; // Importar el icono de React Icons
import ProductItem from "./ProductItem";

export const ProductsList: FC = () => {
  const { products, goToCreateProduct } = useProducts();
  const { addToCart, cart, removeFromCart, changeQuantity } = useCart();

  return (
    <div className={`container mx-auto my-8 px-4 ${products.length === 0 ? 'h-[50vh]' : ''}`}>
      {products.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-full">
          <FaShoppingBasket className="text-7xl text-gray-400 mr-2" />
          <p className="text-5xl font-bold">There are no products, yet</p>
          <button onClick={goToCreateProduct} className="font-bold mt-4 bg-gray-900 text-white py-2 px-4 rounded-2xl">
            Create new Product
          </button>
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
