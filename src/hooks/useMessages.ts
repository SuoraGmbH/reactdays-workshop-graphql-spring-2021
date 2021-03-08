import { gql } from "@apollo/client";
import {
  AllMessagesQuery,
  MutationSendMessageArgs,
  useAllMessagesQuery,
  useSendMessageMutation,
} from "../generated/graphql";

gql`
  query AllMessages {
    messages {
      id
      text
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

gql`
  mutation SendMessage($text: String!, $authorId: ID!) {
    sendMessage(text: $text, authorId: $authorId) {
      id
    }
  }
`;

export type Message = AllMessagesQuery["messages"][number]

const useMessages = () => {
  const { data, error, refetch } = useAllMessagesQuery();
  const [sendMessageToGraphQl] = useSendMessageMutation({
    onCompleted: () => {
      refetch();
    },
  });

  if (error) {
    throw error;
  }

  const sendMessage = (message: MutationSendMessageArgs): void => {
    sendMessageToGraphQl({
      variables: message,
    });
  };

  return {
    messages: data?.messages ?? [],
    sendMessage,
  };
};

export default useMessages;
