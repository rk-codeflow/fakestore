import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductProps } from "../interface";

interface CartItemState {
  cartItems: ProductProps[];
  addToCart: (item: ProductProps) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartItemState>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (item) =>
        set((state) => ({
          cartItems: [...state.cartItems, item],
        })),

      removeItem: (id: string) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.id.toString() !== id
          ),
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);
