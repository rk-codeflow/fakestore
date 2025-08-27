import { gql } from "@apollo/client";

export const LIST_PRODUCTS = gql`
  query Products {
    products {
      id
      title
      description
      price
      images
      category {
        name
      }
    }
  }
`;
