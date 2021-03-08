import React from "react";
import { Person } from "../hooks/usePeople";
import PersonView from "./PersonView";

interface Props {
  loading: boolean;
  error?: Error;
  people: readonly Person[];
}

const PeopleList: React.FunctionComponent<Props> = ({ loading, error, people }) => {
  if (loading) {
    return <span>Loading…</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div role="list">
      {people.map((person) =>
        <PersonView key={person.id} person={person} />,
      )}
    </div>
  );
};

export default PeopleList;
