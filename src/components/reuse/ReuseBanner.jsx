import React from "react";

export default function ReuseBanner({
  title,
  description,
  pathname = false,
  button = false,
}) {
  return (
    <div
      className={`py-8 bg-[#9538E2] text-white text-center ${
        pathname ? "pb-[172px] z-10" : ""
      } `}
    >
      <h2 className="font-bold text-3xl mb-4 ">{title}</h2>
      <p className="">{description}</p>
      {button}
    </div>
  );
}
