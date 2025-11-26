import { useMutation, useQuery } from "@apollo/client";
import { LIST_PRODUCTS } from "../graphql";
import { DELETE_PRODUCT } from "../graphql/mutations";

const GET_ALL_PRODUCTS = (offset: number, limit: number) => {
  return useQuery(LIST_PRODUCTS, {
    variables: {
      offset,
      limit,
    },
    fetchPolicy: "cache-and-network",
  });
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
