import { Link, useLocation } from "react-router-dom";
import Banner from "./Banner";

export default function Hero() {
  const { pathname } = useLocation();

  return (
    <div className="bg-[#f7f7f7]">
      <div
        className={`bg-[#9538E2] text-white ${
          pathname ? "mx-8 rounded-b-[32px] pb-52" : ""
        } `}
      >
        <div className="pt-6 text-center ">
          <h1 className="font-bold text-[56px] mb-6 ">
            Upgrade Your Tech Accessorize with
            <br className="lg:block hidden" /> Gadget Heaven Accessories
          </h1>
          <p className="mb-8">
            Explore the latest gadgets that will take your experience to
            <br className="lg:block hidden" /> the next level. From smart
            devices to the coolest accessories, we have it all!
          </p>
          <Link to="dashboard">
            <button className="hover:bg-[#632497] hover:text-white py-4 px-8 rounded-[32px] font-bold text-xl bg-white text-[#9538E2] mb-12">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      {pathname ? <Banner /> : ""}
    </div>
  );
}
