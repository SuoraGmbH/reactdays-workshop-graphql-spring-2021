class MessageApi {
  constructor(store) {
    this.store = store;
  }

  async getAllMessages() {
    return await this.store.messages.findAll();
  }

  async getAllByAuthorId(personId) {
    return await this.store.messages.findAll({
      where: {
        authorId: personId,
      },
    });
  }

  async sendMessage({ text, authorId }) {
    return await this.store.messages.create({
      text,
      authorId,
    });
  }
}

module.exports = MessageApi;
