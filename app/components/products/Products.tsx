"use client";
import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { useGQL } from "@/app/hooks/useGQL";
import Loader from "../Loader";
import { useSearchStore } from "@/app/store/searchStore";
import { ProductProps } from "@/app/interface";
import Footer from "../Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { GET_ALL_PRODUCTS } = useGQL();
  const { loading, error, data } = GET_ALL_PRODUCTS();
  const searchTerm = useSearchStore((state) => state.searchQuery);

  useEffect(() => {
    if (!data) return;

    if (searchTerm) {
      const search = searchTerm.toLowerCase().trim();
      const filteredProducts = data.products.filter((product: ProductProps) =>
        product.title.toLowerCase().includes(search)
      );
      setProducts(filteredProducts);
    } else {
      setProducts(data.products);
    }
  }, [searchTerm, data]);

  if (loading) return <Loader marginInline="auto" marginTop={20} />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="w-[95%] mx-auto mt-4 grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-4 ">
        <ProductsList productsArray={products} />
      </div>
      <Footer />
    </>
  );
};

export default Products;
