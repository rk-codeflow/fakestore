import React from "react";
import Close from "./icons/Close";

const CartModal = () => {
  return (
    <div className="mx-auto h-96 overflow-y-auto  w-2/5 min-w-[40%] max-w-[40%] rounded-lg shadow-lg fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
      <div className="flex items-center justify-between px-4 py-2">
        <h4 className="font-semibold text-lg">My Cart</h4>
        <p className="font-bold text-md lg:text-2xl">$ 145</p>
      </div>

      <hr className="border-gray-200 shadow-2xs" />
    </div>
  );
};

export default CartModal;
