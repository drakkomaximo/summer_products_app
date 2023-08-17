import { FaPlus } from "react-icons/fa";
import { useProducts } from "../hooks";

export const NewProductBtn = () => {
    const { products, goToCreateProduct } = useProducts()

    if(products.length === 0) return null

    return (
      <div className="fixed bottom-[9.5rem] xs:bottom-20 right-4">
        <button
          className="font-bold bg-gray-500 hover:bg-gray-900 text-white py-2 px-4 rounded-full shadow-lg flex items-center focus:outline-none focus:shadow-outline"
          onClick={goToCreateProduct}
        >
          <FaPlus className="block md:hidden" />
          <span className="hidden md:inline-block">Create Product</span>
        </button>
      </div>
    );
}