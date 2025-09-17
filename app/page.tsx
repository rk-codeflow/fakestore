"use client";
import { useState } from "react";
import CartModal from "./components/CartModal";
import Nav from "./components/Nav";
import Products from "./components/products/Products";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Nav onCartClick={() => setIsCartOpen(true)} />
      <Products />
      <CartModal open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
