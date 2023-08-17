import { FC } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart, useProducts } from "../hooks";
import { PREFIXPRICES, formattedPriceValue } from "../utils";
import { Link } from "react-router-dom";

interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title = "Product List" }) => {
  const { goBack } = useProducts()
  const { totalItemsInCart } = useCart();

  return (
    <header className="bg-gray-900 text-white p-4 sticky w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/3">
            <div className="w-36 cursor-pointer" onClick={goBack}>
              <img
                src="https://www.sumerlabs.com/prod/assets/web/images/sumer-logo-white.png"
                alt="summer logo"
              />
            </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl capitalize font-bold hidden md:block text-center">
            {title}
          </h1>
        </div>
        <div className="w-1/3">
          <div className="flex items-center justify-end">
            <Link to="/shopping-cart" className="flex items-center">
              <span className="ml-1 text-3xl font-semibold mr-2">
                {formattedPriceValue({
                  price: totalItemsInCart,
                  preffixPrice: PREFIXPRICES.NOONE,
                })}
              </span>
              <FiShoppingCart size={"2rem"} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
