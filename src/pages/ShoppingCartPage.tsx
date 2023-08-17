import { Link } from "react-router-dom";
import { ShoppingCart } from "../components";
import { useCart, useProducts } from "../hooks";
import { PREFIXPRICES, ROUTES, formattedPriceValue } from "../utils";
import { FaArrowLeft } from "react-icons/fa";

export const ShoppingCartPage = () => {
  const { cart, removeFromCart, changeQuantity, totalIPricetemsInCart } = useCart();
  const { goToDetailsProduct } = useProducts()
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 h-[91%]">
      <div className="max-w-3xl mx-auto h-full">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <Link
              to={ROUTES.HOME}
              className="flex items-center text-greay-900 hover:underline mb-2"
            >
              <FaArrowLeft size={"2rem"} />
            </Link>
            <h2 className="text-2xl font-semibold mb-2 ml-4">
              Shopping Cart
            </h2>
          </div>
          <div className="flex justify-start items-center">
            <h2 className="mb-2">
              {totalIPricetemsInCart > 0 && (
                <span className="text-5xl">
                  Total:{" "}
                  {formattedPriceValue({
                    price: totalIPricetemsInCart,
                    preffixPrice: PREFIXPRICES.US,
                  })}
                </span>
              )}
            </h2>
          </div>
        </div>
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={changeQuantity}
          goToViewProduct={goToDetailsProduct}
        />
      </div>
    </section>
  );
};
