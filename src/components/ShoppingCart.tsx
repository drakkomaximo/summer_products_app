import { FC } from "react";

import { FaShoppingCart, FaTrashAlt } from "react-icons/fa"; // Importa los iconos de FontAwesome
import { CartItem } from "../interfaces";
import { CountOptions } from ".";
import { PREFIXPRICES, formattedPriceValue } from "../utils";

interface ShoppingCartProps {
  cart: CartItem[];
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}

export const ShoppingCart: FC<ShoppingCartProps> = ({
  cart,
  updateQuantity,
  removeFromCart,
}) => {
  const handleQuantityChange = (
    newQuantity: number,
    productId?: string | undefined
  ) => {
    console.log(productId, newQuantity);
    if (productId && newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 h-4/5 overflow-y-auto`}>
      {cart.length === 0 ? (
        <div className="flex items-center justify-center p-4 h-full">
          <FaShoppingCart className="text-gray-400 text-6xl" />
          <p className="text-gray-600 text-lg ml-2">Tu carrito está vacío.</p>
        </div>
      ) : (
        <ul>
          {cart.map((item) => (
            <li
              key={item.product.id}
              className="flex items-center justify-between mb-2"
            >
              <div className="flex items-center">
                <img
                  src={item.product.image.imageUrl}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover"
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
              <div className="flex">
                <CountOptions
                  handleQuantityChange={handleQuantityChange}
                  quantity={item.quantity}
                  productId={item.product.id}
                />
                <button
                  className="bg-red-600 text-white py-1 px-2 ml-2 rounded"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
