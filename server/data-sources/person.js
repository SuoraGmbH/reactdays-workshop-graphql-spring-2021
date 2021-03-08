class PersonApi {
  constructor(store) {
    this.store = store;
  }

  async getPerson(personId) {
    return await this.store.people.findByPk(personId);
  }

  async getAllPeople() {
    return await this.store.people.findAll();
  }

  async searchPeople({ firstName, lastName }) {
    let where = {}
    if (firstName) {
      where.firstName = firstName
    }
    if (lastName) {
      where.lastName = lastName
    }

    return await this.store.people.findAll({
      where
    });
  }
}

module.exports = PersonApi;
