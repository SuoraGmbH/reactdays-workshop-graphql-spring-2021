const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const createStore = require("./store");
const MessageApi = require("./data-sources/message");
const PersonApi = require("./data-sources/person");

const startServer = async () => {
  const store = await createStore();

  const messageApi = new MessageApi(store);
  const personApi = new PersonApi(store);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ messageApi, personApi }),
  });

  const { url } = await server.listen();

  console.log(`Server started at ${url} 🚎`);
};

startServer();
