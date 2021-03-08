import React from "react";
import MessageView from "./MessageView";
import { Message } from "../hooks/useMessages";

interface Props {
  messages: readonly Message[];
}

const MessageList: React.FunctionComponent<Props> = ({ messages }) => {
  return (
    <div role="list">
      {messages.map((message) =>
        <MessageView key={message.id} message={message} />,
      )}
    </div>
  );
};

export default MessageList;
