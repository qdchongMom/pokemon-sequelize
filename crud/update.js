const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const updatePokemonHpByCategory = async (hp, category) => {
  const numberOfAffectedRecords = await db.SimplePokemon.update(
    { baseHp: hp },
    {
      where: {
        category: {
          [Op.like]: "%" + category + "%",
        },
      },
    }
  );
  return numberOfAffectedRecords;
};
const updatePokemonWithRecords = async (hp, category) => {
  const [numberOfAffectedRecords, updatedPokemons] =
    await db.SimplePokemon.update(
      { baseHp: 100 },
      {
        where: {
          category: {
            [Op.like]: "%Turtle%",
          },
        },
        returning: true,
      }
    );
  return [numberOfAffectedRecords, updatedPokemons];
};
module.exports = {
  updatePokemonHpByCategory,
  updatePokemonWithRecords,
};
