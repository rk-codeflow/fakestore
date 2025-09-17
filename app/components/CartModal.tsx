import React, { useEffect } from "react";
import Image from "next/image";
import Edit from "./icons/Edit";
import Delete from "./icons/Delete";
import { useCartStore } from "../store/cartStore";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal = ({ open, onClose }: CartModalProps) => {
  const cartItems = useCartStore((state) => state.cartItems);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" onClick={onClose}>
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
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty</p>
            ) : (
              cartItems.map((item: any) => (
                <React.Fragment key={item.id}>
                  <div className="flex gap-x-2">
                    <Image
                      src={item.images[0]}
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
              ))
            )}

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
