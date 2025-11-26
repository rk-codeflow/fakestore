import { gql } from "@apollo/client";

export const LIST_PRODUCTS = gql`
  query Products($offset: Int, $limit: Int) {
    products(offset: $offset, limit: $limit) {
      id
      title
      price
      description
      price
      images
      category {
        name
      }
    }
  }
`;
