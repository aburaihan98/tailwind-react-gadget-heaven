import React, { createContext, useEffect, useState } from "react";
import { getToCartLocalStorage } from "../db/addToDB";

// create context
export const CartContext = createContext();

// context provider
export default function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);

  // Loading numbers from local storage
  useEffect(() => {
    const cartItems = getToCartLocalStorage();
    setCartCount(cartItems.length);
  }, []);

  // Function to update numbers when new items are added
  const addToCart = () => {
    const cartItems = getToCartLocalStorage();
    setCartCount(cartItems.length);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
