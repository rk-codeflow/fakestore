import Image from "next/image";
import React from "react";

interface ProductProps {
  id: number;
  images: string;
  title: string;
  description: string;
  category: {
    name: string;
  };
  price: number;
}

interface ProductsDataProps {
  productsArray: ProductProps[];
}

const ProductsList = ({ productsArray }: ProductsDataProps) => {
  console.log({ productsArray });

  return (
    <>
      {productsArray.map((item) => {
        console.log({ item });
        return (
          <div
            key={item.id}
            className="flex flex-col space-y-2  border border-gray-300 rounded-xl p-4"
          >
            <Image
              src={item?.images[0]}
              alt="product"
              width={200}
              height={200}
              className="rounded-xl w-full"
            />

            <div className="mt-8 flex flex-col justify-between h-96 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-md font-bold">{item.title}</h3>
                <div className="bg-pink-500 text-white px-2 py-0.5 rounded-3xl max-w-fit item-xs">
                  {item.category.name}
                </div>
              </div>
              <p className="text-sm">{item.description}</p>

              <h4 className="text-lg md:text-2xl font-bold">${item.price}</h4>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded cursor-pointer">
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductsList;
