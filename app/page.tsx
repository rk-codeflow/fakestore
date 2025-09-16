"use client";
import { useState } from "react";
import CartModal from "./components/CartModal";
import Nav from "./components/Nav";
import Products from "./components/products/Products";
import { ProductProps } from "./interface";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  const addToCart = (item: ProductProps) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <>
      <Nav onCartClick={() => setIsCartOpen(true)} />
      <Products addToCart={addToCart} />
      <CartModal
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
}
