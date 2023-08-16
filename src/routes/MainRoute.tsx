import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage } from "../pages";

export const MainRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <main className="flex flex-col justify-start w-screen h-screen bg-white overflow-x-hidden">
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};