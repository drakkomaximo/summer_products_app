import { FC } from "react";
import { useProducts } from "../hooks";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { Product } from "../interfaces";

interface ProductOptions {
  product: Product
  productId: string;
  isInCart: boolean;
}

export const ProductOptions: FC<ProductOptions> = ({ productId, isInCart, product }) => {
  const { deleteProduct, goToEditProduct, goToDetailsProduct } = useProducts();

  const HandleEditProduct = () => {
    goToEditProduct(product);
  };

  const handleViewProduct = () => {
    goToDetailsProduct(productId);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
      <button
        className="text-white mx-2 focus:outline-none w-8 h-8"
        onClick={handleViewProduct}
      >
        <FaEye size={"2rem"} />
      </button>
      {!isInCart && (
        <button
          className="text-white mx-2 focus:outline-none w-8 h-8"
          onClick={HandleEditProduct}
        >
          <FaPen size={"2rem"} />
        </button>
      )}
      {!isInCart && (
        <button
        className="text-white mx-2 focus:outline-none w-8 h-8"
        onClick={() => deleteProduct(productId)}
      >
        <FaTrashAlt size={"2rem"} />
      </button>
      )}
    </div>
  );
};
