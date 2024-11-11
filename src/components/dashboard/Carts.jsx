import React, { useContext, useEffect, useState } from "react";
import { TbArrowsSort } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import CheckImage from "../../assets/check.png";
import { CartContext } from "../../context/CartContext";

import {
  clearToCartLocalStorage,
  deleteToCartLocalStorage,
  getToCartLocalStorage,
} from "../../db/addToDB";
import Cart from "./Cart";

export default function Carts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [modalTotalPrice, setModalTotalPrice] = useState(0);

  // real time update in navbar
  const { addToCart } = useContext(CartContext);

  // all cart products form localStorage
  useEffect(() => {
    const allProducts = getToCartLocalStorage();
    setProducts(allProducts);
    if (allProducts.length > 0) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [addToCart]);

  // delete product from local storage
  const handleDeleteProduct = (id) => {
    deleteToCartLocalStorage(id);
    const allProducts = getToCartLocalStorage();
    setProducts(allProducts);
    addToCart();
  };

  // total price from cart items
  const totalPrice =
    products.length > 0 ? products.reduce((a, b) => a + b.price, 0) : 0;

  // sort by price from cart price
  const handleSortByPrice = () => {
    const sortPrice = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortPrice);
  };

  // purchase from cart items
  const handlePurchase = () => {
    setModalTotalPrice(totalPrice);
    clearToCartLocalStorage();
    setProducts([]);
    addToCart();
  };

  // go to home page after clicking close button
  const handleRedirectHomePage = () => {
    setModalTotalPrice(null);
    navigate("/");
  };

  return (
    <div>
      <div className="w-11/12 m-auto pt-12 pb-8 flex justify-between items-center">
        <h3 className="font-bold text-2xl">Cart</h3>
        <div className="flex items-center gap-6">
          <h3 className="font-bold text-2xl">Total cost: {totalPrice}</h3>
          <div className="flex gap-4">
            <button
              onClick={handleSortByPrice}
              className={`hover:bg-[#9538E2] hover:text-white flex justify-center items-center gap-[14px] py-[13px] px-[22px] border border-[#9538E2] rounded-[32px] text-[#9538E2] font-medium text-lg} ${
                showButton ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Sort by Price
              <TbArrowsSort />
            </button>
            <button
              disabled={showButton}
              onClick={() => {
                document.getElementById("my_modal_1").showModal(),
                  handlePurchase();
              }}
              className={`hover:bg-white hover:text-[#9538E2] border border-[#9538E2] py-[13px] px-[22px] bg-[#9538E2] rounded-[32px] text-white font-medium text-lg ${
                showButton ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      {products &&
        products?.map((product) => (
          <Cart
            key={product?.product_id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}

      {products.length === 0 ? (
        <p className="font-extrabold text-5xl text-center py-16 text-[#9538E2]">
          Your Cart is empty. Please add some items.
        </p>
      ) : (
        ""
      )}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal p-8 rounded-2xl">
        <div className="modal-box">
          <h3 className="flex justify-center">
            <img src={CheckImage} alt="check image" />
          </h3>
          <p className="py-4 font-bold text-2xl text-center">
            Payment Successfully
          </p>
          <p className="font-medium text-[#09080F99]  text-center mb-4">
            Thanks for purchasing. <br />
            Total: {modalTotalPrice}
          </p>
          <div className="modal-action ">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={handleRedirectHomePage}
                className="py-[9px] w-full m-auto bg-[#ededed] rounded-[32px] font-semibold hover:bg-[#9538E2]"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
