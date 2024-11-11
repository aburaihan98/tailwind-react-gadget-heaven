import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartProvider from "./context/CartContext.jsx";
import WishListProvider from "./context/WishListContext.jsx";
import "./index.css";
import router from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <CartProvider>
      <WishListProvider>
        <RouterProvider router={router} />
      </WishListProvider>
    </CartProvider>
  </StrictMode>
);
