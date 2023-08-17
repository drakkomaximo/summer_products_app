import { FC } from "react";
import { Product } from "../interfaces";
import { FaTrashAlt, FaEdit, FaBackward } from "react-icons/fa";
import { PREFIXPRICES, formattedPriceValue } from "../utils";

interface ProductDetailProps {
  isProductInCart: boolean;
  product: Product;
  handleDelete: () => void;
  handleEdit: () => void;
  goBack: () => void;
}

export const ProductDetail: FC<ProductDetailProps> = ({
  isProductInCart,
  product,
  handleDelete,
  handleEdit,
  goBack,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:flex w-[80%]">
      <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
        <img
          src={product.image.imageUrl}
          alt={product.name}
          className="w-full h-40 md:h-80 object-cover"
        />
      </div>
      <div className="flex justify-between md:grid md:grid-rows-1 w-full md:w-1/2">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-900 font-semibold">{formattedPriceValue({
            price: product.price,
            preffixPrice: PREFIXPRICES.US,
          })}</p>
          <p className="text-gray-500 mt-2">{product.description}</p>
        </div>
        <div className="flex mt-4 items-center">
          <button
            className="flex justify-center items-center bg-gray-500 hover:bg-gray-900 text-white py-1 px-2 rounded mr-2"
            onClick={goBack}
          >
            <FaBackward className="mr-1" />
            <span className="hidden md:block">Go back</span>
          </button>
          {!isProductInCart && (
            <>
              <button
                className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2"
                onClick={handleEdit}
              >
                <FaEdit className="mr-1" />
                <span className="hidden md:block">Edit</span>
              </button>

              <button
                className="flex justify-center items-center bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded "
                onClick={handleDelete}
              >
                <FaTrashAlt className="mr-1" />
                <span className="hidden md:block">Delete</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
