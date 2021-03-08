interface Message {
  id: string;
  text: string;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  messages: readonly Message[];
}

interface PeopleData {
  loading: boolean;
  error?: Error;
  people: readonly Person[];
}

const usePeople = (): PeopleData => {
  return {
    loading: false,
    people: [
      {
        id: "person-1",
        firstName: "Jan",
        lastName: "Krausenbaum",
        messages: [
          {
            id: "message-1",
            text: "Hello there, this is a test message.",
          },
        ],
      },
      {
        id: "person-2",
        firstName: "Florian",
        lastName: "Sowade",
        messages: [
          {
            id: "message-2",
            text: "Hey, this is a second test message.",
          },
        ],
      },
    ],
  };
};

export default usePeople;
