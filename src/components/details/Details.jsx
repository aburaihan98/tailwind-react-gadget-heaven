import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishListContext } from "../../context/WishListContext";
import {
  addToCartLocalStorage,
  addToWishlistLocalStorage,
  getToWishlistLocalStorage,
} from "../../db/addToDB";
import ReuseBanner from "../reuse/ReuseBanner";

export default function Details() {
  // hooks and state
  const { pathname } = useLocation();
  const { productId } = useParams();
  const data = useLoaderData();
  const [showButton, setShowButton] = useState(false);

  // localStorage update
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);

  // details item find
  const productDetails = data.find(
    (product) => product?.product_id === parseInt(productId)
  );

  const {
    product_id,
    product_image,
    product_title,
    price,
    description,
    specification,
    rating,
    availability,
  } = productDetails || {};

  // handle add to cart
  const handleAddToCart = (product) => {
    addToCartLocalStorage(product);
    addToCart();
  };

  // handle add to wish list
  const handleAddToWishList = (product) => {
    addToWishlistLocalStorage(product);
    setShowButton(true);
    addToWishList();
  };

  // existing item find from localStorage
  useEffect(() => {
    const products = getToWishlistLocalStorage();
    const exist = products.find((product) => product.product_id === product_id);
    if (exist) {
      setShowButton(true);
    }
  }, [product_id]);

  return (
    <div className="bg-[#f7f7f7]">
      <ReuseBanner
        title={"Product Details"}
        description={
          <>
            Explore the latest gadgets that will take your experience to{" "}
            <br className="hidden lg:block" /> the next level. From smart
            devices to the coolest accessories, we have it all!
          </>
        }
        pathname={pathname}
      ></ReuseBanner>
      <div className="w-10/12 flex items-center gap-8 m-auto p-6 bg-white rounded-3xl relative -top-[140px] z-20">
        <div className="w-[424px] h-[503px]">
          <img
            className="w-full h-full rounded-2xl"
            src={product_image}
            alt={product_title}
          />
        </div>
        <div>
          <h3 className="font-semibold text-3xl mb-3">{product_title}</h3>
          <p className="font-semibold text-xl mb-3 text-[#09080FCC]">
            Price: ${price}
          </p>
          <button className="py-[7px] px-[14px] mb-4 border border-[#309C08] rounded-[32px] bg-[#309C081A] text-[#309C08] font-medium">
            {availability ? "In Stock" : "No Stock"}
          </button>
          <p className="text-lg mb-4 text-[#09080F99]">{description}</p>
          <p className="font-bold text-lg mb-3">Specification:</p>
          {specification.map((item, index) => (
            <p key={index} className="text-lg text-[#09080F99]">
              {index + 1}. {item}
            </p>
          ))}
          <p className="font-bold text-lg mb-3 mt-4">Rating:</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex gap-3">
              <ReactStars
                count={5}
                size={24}
                value={rating}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <div>
              <button className="py-[7px] px-[14px] rounded-[32px] bg-[#09080F0D]">
                {rating}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleAddToCart(productDetails)}
              className=" hover:bg-[#632497]  flex items-center gap-4 py-[13px] px-[22px] rounded-[32px] bg-[#9538E2] text-white font-extrabold text-lg"
            >
              Add To Card
              <IoCartOutline />
            </button>
            <button
              disabled={showButton}
              onClick={() => handleAddToWishList(productDetails)}
              className={` disabled w-14 h-14 bg-white text-black border rounded-full flex justify-center items-center hover:hover:bg-[#09080F0D] ${
                showButton ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
