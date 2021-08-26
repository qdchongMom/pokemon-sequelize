const db = require("../db/models/index.js");

const { Op } = require("sequelize");

const findPokemonsWithBaseHPGreaterThan = async (baseHP) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    where: {
      baseHp: {
        [Op.gt]: baseHP,
      },
    },
  });
  console.log(
    `RESULT FOR findPokemonsWithBaseHPGreaterThan: ${foundPokemons.length}`
  );
  console.log(foundPokemons);
  //console.log(foundPokemons);
  return foundPokemons;
};

const findPokemonWithNameOrBaseHP = async (name, baseHP) => {
  const foundPokemons = await db.SimplePokemon.findAll({
    raw: true,
    where: {
      [Op.or]: [{ name: name }, { baseHp: baseHP }],
    },
  });
  console.log(
    `RESULT FOR findPokemonWithNameOrBaseHP: ${foundPokemons.length}`
  );
  console.log(foundPokemons);

  return foundPokemons;
};

module.exports = {
  findPokemonsWithBaseHPGreaterThan,
  findPokemonWithNameOrBaseHP,
};
