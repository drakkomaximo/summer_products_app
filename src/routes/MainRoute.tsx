import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, ShoppingCartPage } from "../pages";
import { Footer } from "../components";

export const MainRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <main className="flex flex-col justify-start h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};
