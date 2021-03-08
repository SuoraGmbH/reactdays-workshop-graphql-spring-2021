import React from "react";
import { Person } from "../hooks/usePeople";
import styled from "styled-components/macro";

const PersonItem = styled.article`
  font-family: "Helvetica", sans-serif;
  color: blueviolet;
  padding: 1rem;
`;

interface Props {
  person: Person;
}

const PersonView: React.FunctionComponent<Props> = ({ person }) => {
  return (
    <PersonItem role="listitem article">
      <h2>{person.firstName} {person.lastName}</h2>
      <div role="list">
        {person.messages.map(message => (
          <article role="listitem article" key={message.id}>{message.text}</article>
        ))}
      </div>
    </PersonItem>
  );
};

export default PersonView;
