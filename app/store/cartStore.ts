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
  clearCart: () => void;
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

      clearCart: () =>
        set({
          cartItems: [],
        }),

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
        set((state) => {
          const updatedCartItems = state.cartItems
            .map((item) => {
              if (item.id.toString() === id) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                };
              }
              return item;
            })
            .filter((item) => item.quantity > 0);
          return {
            cartItems: updatedCartItems,
          };
        });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
