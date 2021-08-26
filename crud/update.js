const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const updatePokemonHp = async () => {
  const numberOfAffectedRecords = await db.SimplePokemon.update(
    { baseHP: 100 },
    {
      where: {
        category: {
          [Op.like]: "%Turtle%",
        },
      },
    }
  );
  return numberOfAffectedRecords;
};

module.exports = {
  updatePokemonHp,
};
