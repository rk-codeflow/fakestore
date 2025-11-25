"use client";
import React, { useState, useEffect } from "react";
import Cart from "./icons/Cart";
import { useCartStore } from "../store/cartStore";
import { useDebounce } from "@/app/useDebounce";
import { useSearchStore } from "../store/searchStore";

interface NavProps {
  onCartClick: () => void;
}
const Nav = ({ onCartClick }: NavProps) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const setSearchTerm = useSearchStore((state) => state.setSearchQuery);

  // filtering logic
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  useEffect(() => {
    setSearchTerm(debouncedSearch.trim());
  }, [debouncedSearch]);

  return (
    <div className="sticky bg-white z-10 top-0 py-2.5 border-b border-gray-300">
      <div className="w-[95%] mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <h1 className="text-sm sm:text-xl md:text-2xl lg:text-4xl font-semibold text-pink-500">
              FakeStore
            </h1>
          </a>

          <div className="hidden sm:flex px-4 py-3 w-80 rounded-md border border-pink-500 text-gray-300 overflow-hidden">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="email"
              placeholder="Search Something..."
              className="w-full outline-none bg-transparent text-gray-600 text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-gray-600"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>

          <div className="flex items-center gap-x-8">
            <div
              className="cursor-pointer flex items-center"
              onClick={onCartClick}
            >
              <Cart />{" "}
              <sup className="h-5 w-5 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center">
                {cartItems.length}
              </sup>
            </div>
          </div>
        </div>

        <div className="flex sm:hidden mt-4 sm:mt-0 px-4 py-3 w-full rounded-md border border-pink-500 text-gray-300">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="email"
            placeholder="Search Something..."
            className="w-full outline-none bg-transparent text-gray-600 text-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-600"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
