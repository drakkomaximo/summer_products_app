import { Link } from "react-router-dom";
import { ShoppingCart } from "../components";
import { useCart } from "../hooks";
import { PREFIXPRICES, ROUTES, formattedPriceValue } from "../utils";

export const ShoppingCartPage = () => {
  const { cart, removeFromCart, changeQuantity, totalIPricetemsInCart } =
    useCart();
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 h-[91%]">
      <div className="max-w-3xl mx-auto h-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
            <Link
              to={ROUTES.HOME}
              className="text-blue-500 hover:underline mb-4 block"
            >
              Volver a la página de inicio
            </Link>
          </div>
          {totalIPricetemsInCart > 0 && (
            <h2 className="text-5xl">
              Total:{" "}
              {formattedPriceValue({
                price: totalIPricetemsInCart,
                preffixPrice: PREFIXPRICES.US,
              })}
            </h2>
          )}
        </div>
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={changeQuantity}
        />
      </div>
    </section>
  );
};
