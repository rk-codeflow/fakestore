import { useQuery } from "@apollo/client";
import { LIST_PRODUCTS } from "../graphql";

const GET_ALL_PRODUCTS = () => {
  return useQuery(LIST_PRODUCTS);
};

export const useGQL = () => {
  return {
    GET_ALL_PRODUCTS,
  };
};
