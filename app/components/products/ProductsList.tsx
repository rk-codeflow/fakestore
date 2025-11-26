import { ProductProps } from "@/app/interface";
import { useCartStore } from "@/app/store/cartStore";
import React from "react";
import toast from "react-hot-toast";

interface ProductsDataProps {
  productsArray: ProductProps[];
}

const ProductsList = ({ productsArray }: ProductsDataProps) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <>
      {productsArray.map((item) => {
        const isItemInCart = cartItems.some(
          (cartItem) => cartItem.id === item.id
        );
        return (
          <div
            key={item.id}
            className="flex flex-col space-y-1 sm:space-y-2 border border-gray-300 rounded-xl p-4 bg-gray-100/50"
          >
            <img
              src={item?.images[0]}
              alt="product"
              width={200}
              height={200}
              loading="lazy"
              className="rounded-xl w-full hover:scale-102
             transition-all duration-300 ease-in-out"
            />

            <div className="mt-8 flex flex-col justify-between h-64  sm:space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-md font-bold">{item.title}</h3>
                <div className="bg-pink-500 text-white px-2 py-0.5 rounded-3xl max-w-fit item-xs">
                  {item.category.name}
                </div>
              </div>
              <p className="text-sm line-clamp-3">{item.description}</p>

              <h4 className="text-lg md:text-2xl font-bold">${item.price}</h4>
              <button
                disabled={isItemInCart}
                className={`px-4 py-2 rounded ${
                  isItemInCart
                    ? "bg-pink-500/50"
                    : "cursor-pointer bg-pink-500 hover:bg-pink-600 text-white"
                }`}
                onClick={() => {
                  !isItemInCart && addToCart(item);
                  toast.success(`${item.title} added to cart!`);
                }}
              >
                {isItemInCart ? "Added to cart 🎉 ✅" : "Add to cart"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductsList;
