import { useMutation, useQuery } from "@apollo/client";
import { LIST_PRODUCTS } from "../graphql";
import { DELETE_PRODUCT } from "../graphql/mutations";

const GET_ALL_PRODUCTS = () => {
  return useQuery(LIST_PRODUCTS);
};

const DELETE_PRODUCT_BY_ID = () => {
  return useMutation(DELETE_PRODUCT);
};

export const useGQL = () => {
  return {
    GET_ALL_PRODUCTS,
    DELETE_PRODUCT_BY_ID,
  };
};
