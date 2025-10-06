import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductProps } from "../interface";

export interface CartItem extends ProductProps {
  quantity: number;
}
interface CartItemState {
  cartItems: CartItem[];
  addToCart: (item: ProductProps) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useCartStore = create<CartItemState>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (item) =>
        set((state) => ({
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        })),

      removeItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.id.toString() !== id
          ),
        })),

      increaseQuantity: (id) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id.toString() === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },

      decreaseQuantity: (id) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id.toString() === id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          ),
        }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
