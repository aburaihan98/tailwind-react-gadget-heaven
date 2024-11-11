import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishListContext } from "../../context/WishListContext";

export default function NavBar() {
  const { pathname } = useLocation();

  const { cartCount } = useContext(CartContext);
  const { wishListCount } = useContext(WishListContext);

  const isHomeOrCategoryPage =
    pathname === "/" || pathname.startsWith("/category/");

  return (
    <div className={`${isHomeOrCategoryPage ? "mt-8" : ""}`}>
      <div
        className={`${
          isHomeOrCategoryPage
            ? "mx-8 bg-[#9538E2] text-white rounded-t-[32px]"
            : "bg-white text-black"
        }`}
      >
        <div className="w-11/12 m-auto py-6 flex justify-between items-center ">
          <h2 className="font-bold text-xl rounded-lg ">
            <NavLink to="/">Gadget Heaven</NavLink>
          </h2>
          <ul className="font-medium  flex  gap-12">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "py-3 px-6 rounded-lg bg-[#5a198b] text-white"
                    : "py-3 px-6 rounded-lg border hover:bg-[#09080F0D]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive
                    ? "py-3 px-6 rounded-lg bg-[#5a198b] text-white"
                    : "py-3 px-6 rounded-lg border hover:bg-[#09080F0D]"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "py-3 px-6 rounded-lg bg-[#5a198b] text-white"
                    : "py-3 px-6 rounded-lg border hover:bg-[#09080F0D]"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  isActive
                    ? "py-3 px-6 rounded-lg bg-[#5a198b] text-white "
                    : "py-3 px-6 rounded-lg border hover:bg-[#09080F0D]"
                }
              >
                Analytics
              </NavLink>
            </li>
          </ul>
          <div className="flex gap-4 ">
            <div className=" relative">
              <button className="hover:bg-[#09080F0D] w-10 h-10 bg-white text-black border rounded-full flex justify-center items-center">
                <IoCartOutline />
              </button>
              <div className=" absolute -top-3 -right-3 bg-yellow-50 w-7 h-7 rounded-full text-red-600 flex justify-center items-center font-bold">
                {cartCount}
              </div>
            </div>
            <div className="relative">
              <button className="hover:bg-[#09080F0D] w-10 h-10 bg-white text-black border rounded-full flex justify-center items-center">
                <FaRegHeart />
              </button>
              <div className=" absolute -top-3 -right-3 bg-yellow-50 w-7 h-7 rounded-full text-red-600 flex justify-center items-center font-bold">
                {wishListCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
