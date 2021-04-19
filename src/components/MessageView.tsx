import React, { useState } from "react";
import styled from "styled-components/macro";
import { Message } from "../hooks/useMessages";
import { AuthorDetailsModal } from "./AuthorDetailsModal";

const MessageItem = styled.article`
  font-family: "Helvetica", sans-serif;
  color: hotpink;
  padding: 1rem;

  & + & {
    border-top: 1px black solid;
  }
`;

interface Props {
  message: Message;
}

const MessageView: React.FunctionComponent<Props> = ({
  message: { text, author },
}) => {
  const [showAuthorDetails, setShowAuthorDetails] = useState(false);

  return (
    <MessageItem role="listitem article">
      {text}
      <footer
        onClick={() => {
          setShowAuthorDetails(!showAuthorDetails);
        }}
      >
        {author.firstName} {author.lastName}
      </footer>
      {showAuthorDetails && (
        <AuthorDetailsModal
          personId={author.id}
          onRequestClose={() => setShowAuthorDetails(false)}
        />
      )}
    </MessageItem>
  );
};

export default MessageView;
