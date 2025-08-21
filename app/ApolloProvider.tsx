// lib/ApolloProvider.tsx
"use client";

import { ApolloProvider, gql } from "@apollo/client";
import client from "./client";

// const client = ...

export default function ApolloWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
