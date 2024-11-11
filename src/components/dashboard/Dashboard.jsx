import { Helmet } from "react-helmet";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import ReuseBanner from "../reuse/ReuseBanner";

export default function Dashboard() {
  const { pathname } = useLocation();
  const isActive = pathname === "/dashboard" || pathname === "/dashboard/cart";

  return (
    <>
      {
        <Helmet>
          <title>Dashboard : Gadget Heaven </title>
        </Helmet>
      }
      <div className="bg-[#f7f7f7] pb-12">
        <ReuseBanner
          title={"Dashboard"}
          description={
            <>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to{" "}
              <br className=" hidden lg:block" /> the coolest accessories, we
              have it all!
            </>
          }
          button={
            <>
              <div className="flex justify-center gap-6 mt-8">
                <NavLink
                  to="/dashboard/cart"
                  className={() =>
                    isActive
                      ? "py-[13px] px-[64px] rounded-[32px] font-extrabold text-lg bg-white text-[#9538E2] hover:bg-[#f7f7f7]"
                      : "py-[13px] px-[64px] rounded-[32px] font-extrabold text-lg bg-[#9538E2] text-white border border-white hover:bg-[#632497]"
                  }
                >
                  Cart
                </NavLink>
                <NavLink
                  to="/dashboard/wishlist"
                  className={({ isActive }) =>
                    isActive
                      ? "py-[13px] px-[64px] rounded-[32px] font-extrabold text-lg bg-white text-[#9538E2] hover:bg-[#f7f7f7]"
                      : "py-[13px] px-[64px] rounded-[32px] font-extrabold text-lg bg-[#9538E2] text-white border border-white hover:bg-[#632497]"
                  }
                >
                  Wishlist
                </NavLink>
              </div>
            </>
          }
        />
        {/* OutLate   */}
        <Outlet />
      </div>
    </>
  );
}
