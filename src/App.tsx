import React from 'react';
import MessageList from "./components/MessageList";
import MessageCompose from "./components/MessageCompose";
import PeopleList from "./components/PeopleList";
import useMessages from "./hooks/useMessages";
import usePeople from "./hooks/usePeople";

function App() {
  const { messages, sendMessage } = useMessages();
  const { people, loading: peopleLoading, error: peopleError } = usePeople();

  const handleMessageSend = (text: string) => {
    sendMessage({
      authorId: "e6bf0c9e-58ca-4322-9403-17bfe710ace7",
      text,
    });
  };

  return (
    <>
      <h1>List of Messages</h1>
      <MessageList messages={messages} />
      <h1>Add New Message</h1>
      <MessageCompose onMessageSend={handleMessageSend} />
      <h1>People</h1>
      <PeopleList people={people} loading={peopleLoading} error={peopleError} />
    </>
  );
}

export default App;
