import { useState, FC } from "react";
import { CartItem, Product } from "../interfaces";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ProductOptions } from ".";

interface ProductItemProps {
  product: Product;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
}

const ProductItem: FC<ProductItemProps> = ({
  product,
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
}) => {
  const cartItem = cart.find((item) => item.product.id === product.id);
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(
    cartItem && cartItem.quantity > 1 ? cartItem.quantity : 1
  );
  const isInCart = !!cartItem;

  const handleAddToCart = () => {
    addToCart(product);
    updateQuantity(product.id, quantity);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setQuantity(1);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <li
      className="bg-white rounded-lg shadow-md p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        <img
          src={product.image.imageUrl}
          alt={product.image.imageName}
          className={`w-full h-40 object-cover mb-2`}
        />
        {isHovered && (
          <ProductOptions productId={product.id} isInCart={isInCart} />
        )}
      </div>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-green-600 font-semibold mt-2">${product.price}</p>
      </div>
      <div className="flex mt-2 justify-between">
        {isInCart ? (
          <button
            className="bg-red-600 text-white py-1 px-2 rounded w-full"
            onClick={handleRemoveFromCart}
          >
            Delete Product to cart
          </button>
        ) : (
          <>
            <button
              className="bg-green-600 text-white py-1 px-4 rounded"
              onClick={handleAddToCart}
            >
              Add Product to cart
            </button>
            <div className="flex ml-2">
              <button
                className="bg-gray-300 text-gray-600 py-1 px-2 rounded"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                <FaMinus />
              </button>
              <span className="px-2">{quantity}</span>
              <button
                className="bg-gray-300 text-gray-600 py-1 px-2 rounded"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <FaPlus />
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
