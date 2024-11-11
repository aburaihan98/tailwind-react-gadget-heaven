import React, { createContext, useEffect, useState } from "react";
import { getToWishlistLocalStorage } from "../db/addToDB";

// create context
export const WishListContext = createContext();

// context provider
export default function WishListProvider({ children }) {
  const [wishListCount, setWishListCount] = useState(0);

  // Loading numbers from local storage
  useEffect(() => {
    const wishListItems = getToWishlistLocalStorage();
    setWishListCount(wishListItems.length);
  }, []);

  // Function to update numbers when new items are added
  const addToWishList = () => {
    const wishListItems = getToWishlistLocalStorage();
    setWishListCount(wishListItems.length);
  };

  return (
    <WishListContext.Provider value={{ wishListCount, addToWishList }}>
      {children}
    </WishListContext.Provider>
  );
}
