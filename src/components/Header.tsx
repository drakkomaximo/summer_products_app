import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../hooks";

export const Header: React.FC = () => {
  const { cart } = useCart();
  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-gray-900 text-white py-4 sticky w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Logo de la Tienda</div>
        <div className="flex items-center">
          <Link to="/shopping-cart" className="flex items-center">
            <FiShoppingCart className="mr-2 text-xl" />
            <span>Carrito</span>
            <span className="ml-1 text-sm font-semibold">
              {totalItemsInCart} artículos
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
