import { FC } from "react";

import { FaEye, FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { CartItem, Product } from "../interfaces";
import { CountOptions } from ".";
import { PREFIXPRICES, formattedPriceValue } from "../utils";

interface ShoppingCartProps {
  cart: CartItem[];
  goToViewProduct: (product: Product) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}

export const ShoppingCart: FC<ShoppingCartProps> = ({
  cart,
  goToViewProduct,
  updateQuantity,
  removeFromCart,
}) => {
  const handleQuantityChange = (
    newQuantity: number,
    productId?: string | undefined
  ) => {
    if (productId && newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${cart.length === 0 ? 'h-[90%]' : 'h-[60vh] md:h-[70vh]'} overflow-y-auto`}>
      {cart.length === 0 ? (
        <div className="flex items-center justify-center p-4 h-full">
          <FaShoppingCart className="text-gray-400 text-6xl" />
          <p className="text-gray-600 text-lg ml-2">This tis empty.</p>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.product.id}
              className="flex flex-col xs:flex-row items-center justify-between mb-2 md:mb-4"
            >
              <div className="flex items-center mb-2 xs:mb-0">
                <img
                  src={item.product.image.imageUrl}
                  alt={item.product.name}
                  className="w-28 h-28 sx:h-16 sx:w-16 object-cover"
                />
                <div className="ml-2">
                  <h3 className="text-lg font-semibold">{item.product.name}</h3>
                  <p className="text-gray-600">
                    {formattedPriceValue({
                      price: item.product.price * item.quantity,
                      preffixPrice: PREFIXPRICES.US,
                    })}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between w-auto">
                <CountOptions
                  handleQuantityChange={handleQuantityChange}
                  quantity={item.quantity}
                  productId={item.product.id}
                />
                <div className="flex">
                  <button
                    className="bg-gray-900 text-white py-1 px-2 ml-2 rounded"
                    onClick={() => goToViewProduct(item.product)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="bg-red-600 text-white py-1 px-2 ml-2 rounded"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
