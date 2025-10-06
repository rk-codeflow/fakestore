import { StringValueNode } from "graphql";
import React, { useState } from "react";

interface CartItemCount {
  initialCount: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}
const CartItemCount = ({
  initialCount,
  handleIncrement,
  handleDecrement,
}: CartItemCount) => {
  return (
    <div className="bg-pink-500 rounded-full text-white px-2 py-[3px] flex items-center justify-center gap-[10px]">
      <button className="text-sm cursor-pointer" onClick={handleDecrement}>
        -
      </button>
      <span className="text-sm text-center w-4">{initialCount}</span>
      <button className="text-sm cursor-pointer" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default CartItemCount;
