import React, { useEffect, useState } from "react";
import Image from "next/image";
import Delete from "./icons/Delete";
import { CartItem, useCartStore } from "../store/cartStore";
import { useGQL } from "../hooks/useGQL";
import { ProductProps } from "../interface";
import CartItemCount from "./CartItemCount";
import toast from "react-hot-toast";
import Loader from "./Loader";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal = ({ open, onClose }: CartModalProps) => {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { DELETE_PRODUCT_BY_ID } = useGQL();
  const [handleDelete] = DELETE_PRODUCT_BY_ID();

  // cart store
  const cartItems = useCartStore((state) => state.cartItems);
  const removeCartItem = useCartStore((state) => state.removeItem);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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

  // delete item
  const deleteItem = async (id: string) => {
    setDeletingId(id);
    try {
      await handleDelete({
        variables: {
          deleteProductId: id,
        },
      });

      removeCartItem(id);
      toast.success("Item deleted successfully");
    } catch (error) {
      toast.error("Error deleting item");
    } finally {
      setDeletingId(null);
    }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" onClick={onClose}>
        <div
          className="mx-auto w-2/5 min-w-[40%] max-w-[500px] rounded-lg shadow-lg z-50 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-4 py-2 sticky top-0 bg-white z-10 border-b border-gray-200 shadow-2xs">
            <h4 className="font-semibold text-lg">My Cart</h4>
            <p className="font-bold text-md lg:text-2xl">$ {total}</p>
          </div>

          <div className="mt-4 px-4 flex flex-col max-h-96 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty</p>
            ) : (
              cartItems.map((item: CartItem) => (
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
                        <CartItemCount
                          initialCount={item.quantity}
                          handleIncrement={() =>
                            increaseQuantity(item.id.toString())
                          }
                          handleDecrement={() =>
                            decreaseQuantity(item.id.toString())
                          }
                        />
                        {deletingId === item.id.toString() ? (
                          <Loader
                            height={20}
                            width={20}
                            marginInline="none"
                            marginTop={0}
                          />
                        ) : (
                          <button
                            className="relative top-[2px] cursor-pointer"
                            onClick={() => {
                              deleteItem(item.id.toString());
                            }}
                          >
                            <Delete />
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="font-bold text-md ml-auto">${item.price}</p>
                  </div>

                  <hr className=" border-gray-200 last:border-b-0 shadow-2xs my-2" />
                </React.Fragment>
              ))
            )}
          </div>

          <div className="px-4 py-2">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded cursor-pointer my-4 w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
