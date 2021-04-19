import {gql} from "@apollo/client";
import {useAuthorDetailsQuery} from "../generated/graphql";
import React from "react";

interface Props {
  personId: string;
}

gql`
  query AuthorDetails($personId: ID!) {
    person(id: $personId) {
      id
      email
      firstName
      lastName
    }
  }
`;


export const AuthorDetails: React.FunctionComponent<Props> = ({personId}) => {
  const queryResult = useAuthorDetailsQuery({
    variables: { personId },
    returnPartialData: true,
  });

  const { data } = queryResult;

  if (!data?.person) {
    return <div>Loading</div>;
  }

  const { person } = data;

  return (
      <div>
        <p>Name: {person?.firstName}</p>
        <p>Mail: {person?.email || "Loading…"}</p>
      </div>
  );

}
