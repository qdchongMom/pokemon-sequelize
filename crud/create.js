const db = require("../db/models/index.js");

const createPikachu = async () => {
  const pikachu = {
    name: "Pikachu",
    japaneseName: "ピカチュウ",
    baseHp: 35,
    category: "Mouse Pokemon",
  };
  console.log("HERE");
  const created = await db.SimplePokemon.create(pikachu);
  console.log("HERE");

  console.log("Pikachu was saved to the database!");
  // console.log(created); // Not recommended, since Sequelize instances have a lot of things attached. This might produce a lot of clutter.
  console.log(created.toJSON()); // The recommended way to log an instance, but do note that this might still log sensitive data stored in database. Need processing.

  const raichu = {
    name: "Raichu",
    japaneseName: "ピカチュウ",
    baseHp: 100,
    category: "electric Pokemon",
  };
  const created2 = await db.SimplePokemon.create(raichu);
  console.log(created2.toJSON());
};

module.exports = createPikachu;
