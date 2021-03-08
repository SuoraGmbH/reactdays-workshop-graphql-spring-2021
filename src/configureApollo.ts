import { ApolloClient, InMemoryCache } from "@apollo/client";

const configureApollo = () => {
  return new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });
};

export default configureApollo;
