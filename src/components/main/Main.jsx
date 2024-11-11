import { Outlet } from "react-router-dom";
import Hero from "../headers/Hero";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <>
      {/* hero section  */}
      <Hero />
      {/* products section  */}
      <div className="w-11/12 m-auto relative -top-[84px] ">
        <h2 className="font-bold text-[40px] mb-12 text-center">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
