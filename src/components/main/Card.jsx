import React from "react";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  const { product_id, product_image, product_title, price } = product || {};

  return (
    <div className="p-5 border rounded-2xl bg-white shadow-2xl transition-transform transform hover:scale-105">
      <div className="mb-6 h-[181px]">
        <img
          className="w-full h-full rounded-xl"
          src={product_image}
          alt={product_title}
        />
      </div>
      <h3 className="font-semibold text-2xl mb-3">{product_title}</h3>
      <p className="font-medium text-xl mb-4">Price: {price}</p>
      <Link to={`/${product_title}/${product_id}`}>
        <button className="py-[13px] px-[22px] border border-[#9538E2] rounded-[32px]  text-[#9538E2] font-extrabold text-lg hover:bg-[#9538E2] hover:text-white">
          View Details
        </button>
      </Link>
    </div>
  );
}
