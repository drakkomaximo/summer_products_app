import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormPage, HomePage, NotFoundPage, ProductDetailsPage, ShoppingCartPage } from "../pages";
import { Footer } from "../components";
import { ROUTES } from "../utils";

export const MainRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <main className="flex flex-col justify-start h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.SHOPPINGCART} element={<ShoppingCartPage />} />
          <Route path={ROUTES.EDITPRODUCT} element={<FormPage />} />
          <Route path={ROUTES.CREATEPRODUCT} element={<FormPage />} />
          <Route path={ROUTES.PRODUCTDETAILS} element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};
