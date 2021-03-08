const { Sequelize, DataTypes } = require("sequelize");

const createStore = async () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: "./store.sqlite",
  });

  const messages = db.define("message", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    text: DataTypes.TEXT,
    authorId: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  const people = db.define("person", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  await db.sync({ force: true });

  const jan = await people.create({
    id: "8f282004-35c8-4d36-b2fc-c725345d774c",
    firstName: "Jan",
    lastName: "Krausenbaum",
    email: "f.sowade@suora.com",
  });

  await messages.create({
    text: "Hello there, this is a test message.",
    authorId: jan.id,
  });

  const florian = await people.create({
    id: "e6bf0c9e-58ca-4322-9403-17bfe710ace7",
    firstName: "Florian",
    lastName: "Sowade",
    email: "f.sowade@suora.com",
  });

  await messages.create({
    text: "Hey, this is a second test message.",
    authorId: florian.id,
  });

  const janHofer = await people.create({
    firstName: "Jan",
    lastName: "Hofer",
    email: "jan.hofer@tagesschau.de",
  });

  await messages.create({
    text: "Guten Abend meine Damen und Herren, ich begrüße Sie zur Tagesschau.",
    authorId: janHofer.id,
    createdAt: "2020-12-14T19:00:00.000Z",
  });

  return { db, messages, people };
};

module.exports = createStore;
