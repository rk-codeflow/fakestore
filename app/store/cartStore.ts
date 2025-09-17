import { create } from "zustand";
import { ProductProps } from "../interface";

interface CartItemState {
  cartItems: ProductProps[];
  addToCart: (item: ProductProps) => void;
}
export const useCartStore = create<CartItemState>((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
}));
