const resolvers = {
  Query: {
    messages: async (node, _, { dataSources }) => {
      return await dataSources.messageApi.getAllMessages();
    },
    person: async (node, args, { dataSources }) => {
      return await dataSources.personApi.getPerson(args.id);
    },
    people: async (node, _, { dataSources }) => {
      return await dataSources.personApi.getAllPeople();
    },
    searchPeople: async (node, args, { dataSources }) => {
      return await dataSources.personApi.searchPeople(args);
    },
  },
  Mutation: {
    sendMessage: async (_, { text, authorId }, { dataSources }) => {
      return await dataSources.messageApi.sendMessage({
        text,
        authorId,
      });
    },
  },
  Message: {
    author: async ({ dataValues }, _, { dataSources }) => {
      return await dataSources.personApi.getPerson(dataValues.authorId);
    },
  },
  Person: {
    messagesConnection: async ({ dataValues }, _, { dataSources }) => {
      const messages = await dataSources.messageApi.getAllByAuthorId(dataValues.id);
      return {
        edges: messages.map(message => ({
          node: message,
        })),
      };
    },
  },
};

module.exports = resolvers;
