import {ApolloClient, InMemoryCache} from "@apollo/client";

const configureApollo = () => {
  return new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            person: (_, {args, toReference}) => {
              return toReference({
                  __typename: 'Person',
                  // @ts-expect-error
                  id: args.id
                }
              )
            }
          }
        }
      }
    }),

  });
};

export default configureApollo;
