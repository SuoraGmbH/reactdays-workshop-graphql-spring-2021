import React, { useState } from 'react';
import MessageList from "./components/MessageList";
import MessageCompose from "./components/MessageCompose";
import PeopleList from "./components/PeopleList";
import useMessages from "./hooks/useMessages";
import usePeople from "./hooks/usePeople";

function App() {
  const [firstName, setFirstName] = useState('');

  const { messages, sendMessage } = useMessages();
  const { people, loading: peopleLoading, error: peopleError } = usePeople(firstName);

  const handleMessageSend = (text: string) => {
    sendMessage({
      authorId: "e6bf0c9e-58ca-4322-9403-17bfe710ace7",
      text,
    });
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value)
  }

  return (
    <>
      <h1>List of Messages</h1>
      <MessageList messages={messages} />
      <h1>Add New Message</h1>
      <MessageCompose onMessageSend={handleMessageSend} />
      <h1>People</h1>
      First Name: <input onChange={handleFirstNameChange} value={firstName} />
      <PeopleList people={people} loading={peopleLoading} error={peopleError} />
    </>
  );
}

export default App;
