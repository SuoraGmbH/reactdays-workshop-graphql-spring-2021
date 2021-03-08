import React from "react";
import styled from "styled-components/macro";
import { Message } from "../hooks/useMessages";

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
  return (
    <MessageItem role="listitem article">
      {text}
      <footer>{author.firstName} {author.lastName}</footer>
    </MessageItem>
  );
};

export default MessageView;
