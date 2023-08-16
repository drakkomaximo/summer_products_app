import { Link } from "react-router-dom";
import { ShoppingCart } from "../components";
import { useCart } from "../hooks";

export const ShoppingCartPage = () => {
  const { cart, removeFromCart, changeQuantity } = useCart();
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>{" "}
        <Link to="/" className="text-blue-500 hover:underline mb-4 block">
          Volver a la página de inicio
        </Link>{" "}
        <ShoppingCart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={changeQuantity}
        />
      </div>
    </section>
  );
};
