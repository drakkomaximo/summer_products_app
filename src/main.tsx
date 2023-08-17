import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider, ProductProvider } from "./context";
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
    <ToastContainer />
  </React.StrictMode>
);
