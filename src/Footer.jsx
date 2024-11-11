import React from "react";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="py-[100px] w-11/12 m-auto ">
        <h2 className="font-bold text-3xl mb-3 text-center">Gadget Heaven</h2>
        <p className="font-medium text-[#09080F99] text-center pb-8 mb-8 border-b">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div className="flex justify-center items-center gap-[166px]">
          <div className="text-center">
            <h3 className="font-bold text-lg  mb-4">Services</h3>
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping & Delivery</p>
            <p>Returns</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg  mb-4">Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg  mb-4">Legal</h3>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
