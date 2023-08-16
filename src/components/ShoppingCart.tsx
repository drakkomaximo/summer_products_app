import { FC } from 'react';

import { FaMinus, FaPlus, FaShoppingCart, FaTrashAlt } from 'react-icons/fa'; // Importa los iconos de FontAwesome
import { CartItem } from '../interfaces';

interface ShoppingCartProps {
  cart: CartItem[];
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}

export const ShoppingCart: FC<ShoppingCartProps> = ({ cart, updateQuantity, removeFromCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {cart.length === 0 ? (
        <div className="flex items-center justify-center p-4">
          <FaShoppingCart className="text-gray-400 text-6xl" /> {/* Icono */}
          <p className="text-gray-600 text-lg ml-2">Tu carrito está vacío.</p> {/* Mensaje */}
        </div>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.product.id} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={item.product.image.imageUrl} alt={item.product.name} className="w-16 h-16 object-cover" />
                <div className="ml-2">
                  <h3 className="text-lg font-semibold">{item.product.name}</h3>
                  <p className="text-gray-600">${item.product.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-300 text-gray-600 py-1 px-2 rounded"
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                >
                  <FaPlus />
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="bg-gray-300 text-gray-600 py-1 px-2 rounded"
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                >
                  <FaMinus />
                </button>
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
