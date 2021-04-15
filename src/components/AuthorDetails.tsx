import React from "react";
import { gql } from "@apollo/client";
import { useAuthorDetailsQuery } from "../generated/graphql";
import styled from "styled-components/macro";

interface Props {
  personId: string;
  onRequestClose: () => void;
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

const Modal = styled.div`
  position: fixed;
  background-color: rgba(55, 55, 55, 0.35);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: white;
  }
`;

export const AuthorDetails: React.FunctionComponent<Props> = ({
  personId,
  onRequestClose,
}) => {
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
    <Modal onClick={() => onRequestClose()}>
      <div onClick={(e) => e.stopPropagation()}>
        <p>Name: {person?.firstName}</p>
        <p>Mail: {person?.email || "Loading…"}</p>
      </div>
    </Modal>
  );
};
