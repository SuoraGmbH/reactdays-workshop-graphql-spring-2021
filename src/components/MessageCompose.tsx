import React from "react";
import styled from "styled-components/macro";

const MessageComposeForm = styled.form`
  background-color: lavender;
  padding: 0.5rem;
`;

const MessageInput = styled.input`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;


interface Props {
  onMessageSend: (messageText: string) => void;
}

const MessageCompose: React.FunctionComponent<Props> = ({ onMessageSend }) => {
  const [inputValue, setInput] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onMessageSend(inputValue);
    setInput("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <MessageComposeForm onSubmit={handleSubmit}>
      <label htmlFor="message-text">Message Text</label>
      <MessageInput
        id="message-text"
        onChange={handleChange}
        value={inputValue}
        className="message-compose--message-text"
      />
      <button type="submit">Absenden</button>
    </MessageComposeForm>
  );
};

export default MessageCompose;
