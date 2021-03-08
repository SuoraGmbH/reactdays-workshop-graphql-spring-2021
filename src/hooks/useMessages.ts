import { useState } from "react";
import { gql } from "@apollo/client";

gql`
  query AllMessages {
    messages {
      id
    }
  }
`;


interface NewMessage {
  authorId: string
  text: string
}

interface Person {
  firstName: string;
  lastName: string;
}

export interface Message {
  id: string;
  text: string;
  author: Person;
}

const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "message-1",
      text: "Hello there, this is a test message.",
      author: {
        firstName: "Jan",
        lastName: "Krausenbaum",
      },
    },
    {
      id: "message-2",
      text: "Hey, this is a second test message.",
      author: {
        firstName: "Florian",
        lastName: "Sowade",
      },
    },
  ]);

  const sendMessage = (message: NewMessage): void => {
    setMessages(previousMessages => ([
      ...previousMessages,
      {
        id: Date.now().toString(),
        text: message.text,
        author: {
          firstName: "Jan",
          lastName: "Krausenbaum",
        },
      },
    ]));
  };

  return {
    messages,
    sendMessage,
  };
};

export default useMessages;
