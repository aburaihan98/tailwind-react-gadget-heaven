import React, { useContext, useEffect, useState } from "react";
import { WishListContext } from "../../context/WishListContext";
import {
  deleteToWishlistLocalStorage,
  getToWishlistLocalStorage,
} from "../../db/addToDB";
import WishList from "./WishList";

export default function WishLists() {
  const [products, setProducts] = useState([]);

  // real time update in navbar
  const { addToWishList } = useContext(WishListContext);

  // get all wish list from localStorage
  useEffect(() => {
    const allProducts = getToWishlistLocalStorage();
    setProducts(allProducts);
  }, []);

  // delete product from localStorage
  const handleDeleteProduct = (id) => {
    deleteToWishlistLocalStorage(id);
    const allProducts = getToWishlistLocalStorage();
    setProducts(allProducts);
    addToWishList();
  };

  return (
    <div>
      <div className="w-11/12 m-auto pt-12 pb-8 flex justify-between items-center">
        <h3 className="font-bold text-2xl">Wishlist</h3>
      </div>
      {products.map((product) => (
        <WishList
          key={product?.product_id}
          product={product}
          handleDeleteProduct={handleDeleteProduct}
        />
      ))}
      {products.length === 0 ? (
        <p className="font-extrabold text-5xl text-center py-16 text-[#9538E2]">
          Your Wish list is empty. Please add some items.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
