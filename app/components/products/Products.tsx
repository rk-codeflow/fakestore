"use client";
import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { useGQL } from "@/app/hooks/useGQL";
import Loader from "../Loader";
import { useSearchStore } from "@/app/store/searchStore";
import { ProductProps } from "@/app/interface";
import Footer from "../Footer";
import Pagination from "../Pagination";

const Products = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const offset = (currentPage - 1) * itemsPerPage;
  const { GET_ALL_PRODUCTS } = useGQL();
  const { loading, error, data } = GET_ALL_PRODUCTS(offset, itemsPerPage);
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

  const hasMoreItems = products.length >= itemsPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (loading) return <Loader marginInline="auto" marginTop={20} />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="w-[95%] mx-auto mt-4 grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-4 ">
        <ProductsList productsArray={products} />
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasMoreItems={hasMoreItems}
      />
      <Footer />
    </>
  );
};

export default Products;
