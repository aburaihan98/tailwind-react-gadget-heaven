import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="p-6 text-center bg-white rounded-2xl shadow-2xl">
      <Link to="/">
        <button
          className={`py-[13px] px-[22px] rounded-[32px] ${
            pathname === "/"
              ? "bg-[#9538E2] text-white"
              : "bg-[#09080F0D] text-[#09080F99]"
          } font-extrabold text-lg mb-6`}
        >
          All Product
        </button>
      </Link>
      {categories &&
        categories.map((category) => (
          <div key={category?.id} className=" flex flex-col">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "py-[13px] px-[22px] rounded-[32px] bg-[#9538E2] text-white font-extrabold text-lg mb-6"
                  : "py-[13px] px-[22px] rounded-[32px] bg-[#09080F0D] text-[#09080F99] font-extrabold text-lg mb-6"
              }
              key={category?.id}
              to={`/category/${category?.category}`}
            >
              {category.category}
            </NavLink>
          </div>
        ))}
    </div>
  );
}
