import { gql } from "@apollo/client";
import { useAllPeopleQuery } from "../generated/graphql";

gql`
  query AllPeople($firstName: String) {
    searchPeople(firstName: $firstName) {
      id
      firstName
      lastName
      messagesConnection {
        edges {
          node {
            id
            text
          }
        }
      }
    }
  }
`;

interface Message {
  id: string;
  text: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  messages: readonly Message[];
}

interface PeopleData {
  loading: boolean;
  error?: Error;
  people: readonly Person[];
}

const usePeople = (firstName?: string): PeopleData => {
  const { data, error, loading } = useAllPeopleQuery({ variables: { firstName }, pollInterval: 2000 });

  return {
    loading,
    error,
    people: data?.searchPeople.map((person) => ({
      id: person.id,
      firstName: person.firstName,
      lastName: person.lastName,
      messages: person.messagesConnection?.edges.map(edge => edge.node) || [],
    })) || [],
  };
};

export default usePeople;
