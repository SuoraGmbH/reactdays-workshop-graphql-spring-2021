const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Message {
    id: ID!
    text: String!
    author: Person!
    createdAt: Date!
  }

  type Person {
    id: ID!
    firstName: String!
    lastName: String!
    email: String
    messagesConnection: PersonMessagesConnection
  }

  type PersonMessagesConnection {
    edges: [PersonMessagesEdge!]!
  }

  type PersonMessagesEdge {
    node: Message!
  }

  type Query {
    messages: [Message!]!
    person(id: ID!): Person
    people: [Person!]!
    searchPeople(firstName: String, lastName: String): [Person!]!
  }

  type Mutation {
    sendMessage(text: String!, authorId: ID!): Message!
  }
`;

module.exports = typeDefs;
