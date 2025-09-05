import React, { useState } from "react";
import Image from "next/image";
import Edit from "./icons/Edit";
import Delete from "./icons/Delete";

interface CartModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const items = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Wireless Bluetooth Headphones",
    price: 79.99,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Smart Fitness Watch",
    price: 149.95,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    title: "Premium Coffee Maker",
    price: 89.5,
  },

  {
    id: 4,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    title: "Minimalist Leather Backpack",
    price: 124.99,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5",
    title: "Modern Desk Lamp",
    price: 58.75,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    title: "Waterproof Wireless Speaker",
    price: 89.99,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    title: "Ergonomic Office Chair",
    price: 249.95,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
    title: "Gaming Mechanical Keyboard",
    price: 95.5,
  },
];

const CartModal = ({ isOpen, toggleModal }: CartModalProps) => {
  if (isOpen) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" onClick={toggleModal}>
        <div
          className="mx-auto h-96 overflow-y-auto  w-2/5 min-w-[40%] max-w-[500px] rounded-lg shadow-lg z-50 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <h4 className="font-semibold text-lg">My Cart</h4>
            <p className="font-bold text-md lg:text-2xl">$ 145</p>
          </div>

          <hr className="border-gray-200 shadow-2xs" />

          <div className="mt-4 px-4 flex flex-col">
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <div className="flex gap-x-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="flex justify-center flex-col gap-y-2">
                    <h4 className="font-semibold">{item.title}</h4>
                    <div className="flex gap-x-2">
                      <a href="#">
                        {" "}
                        <Edit />
                      </a>
                      <a href="#">
                        <Delete />
                      </a>
                    </div>
                  </div>
                  <p className="font-bold text-md ml-auto">${item.price}</p>
                </div>

                <hr className=" border-gray-200 last:border-b-0 shadow-2xs my-2" />
              </React.Fragment>
            ))}

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded cursor-pointer my-4">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
