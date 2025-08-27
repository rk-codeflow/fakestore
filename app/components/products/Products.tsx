"use client";
import React, { useEffect, useState } from "react";
import ProductsList from "../ProductsList";
import { useGQL } from "@/app/hooks/useGQL";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { GET_ALL_PRODUCTS } = useGQL();
  const { loading, error, data } = GET_ALL_PRODUCTS();

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  });
  return (
    <div className="w-[95%] mx-auto mt-4 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-4">
      <ProductsList productsArray={products} />
    </div>
  );
};

export default Products;
