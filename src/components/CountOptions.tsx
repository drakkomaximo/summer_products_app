import { FC } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CountOptionsProps {
  productId?: string,
  quantity: number;
  handleQuantityChange: (newQuantity: number, productId?: string) => void;
}

export const CountOptions: FC<CountOptionsProps> = ({
  productId,
  quantity,
  handleQuantityChange,
}) => {
  return (
    <div className="flex ml-2">
      <button
        data-testid="decrement-button"
        className="bg-gray-300 text-gray-600 py-1 px-2 rounded"
        onClick={() => handleQuantityChange(quantity - 1, productId)}
      >
        <FaMinus />
      </button>
      <span className="px-2">{quantity}</span>
      <button
        data-testid="increment-button"
        className="bg-gray-300 text-gray-600 py-1 px-2 rounded"
        onClick={() => handleQuantityChange(quantity + 1, productId)}
      >
        <FaPlus />
      </button>
    </div>
  );
};
