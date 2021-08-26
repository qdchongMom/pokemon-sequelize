const {
  findAllPokemons,
  findPokemonByName,
  findPokemonsWithBaseHPGreaterThan,
  findPokemonWithNameOrBaseHP,
} = require("../read.js");

const db = require("../../db/models/index");
const PokemonModel = db.SimplePokemon;

jest.setTimeout(3000);
//jest.mock("../../utils/logger.js");

const pikachu = {
  name: "Pikachu",
  japaneseName: "ピカチュウ",
  baseHp: 35,
  category: "Mouse Pokemon",
};
const pokemons = [
  pikachu,
  {
    name: "Squirtle",
    japaneseName: "ゼニガメ",
    baseHp: 44,
    category: "Tiny Turtle Pokemon",
  },
  {
    name: "Wartortle",
    japaneseName: "カメール",
    baseHp: 59,
    category: "Turtle Pokémon",
  },
  {
    name: "Meowth",
    japaneseName: "ニャース",
    baseHp: 40,
    category: "Scratch Cat Pokémon",
  },
];

describe("retrieve/read/find", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
    await PokemonModel.bulkCreate(pokemons);
  });

  afterAll(async () => {
    await PokemonModel.truncate();
    await db.sequelize.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* eslint-disable no-unused-vars, no-unused-expressions, jest/no-disabled-tests */

  //   describe("findAllPokemons", () => {
  //     it("should return array with length 4", async () => {
  //       const retrieved = await findAllPokemons();
  //       expect(retrieved.length).toEqual(4);
  //     });
  //   });

  describe("findPokemons", () => {
    describe.skip("findPokemonsByName", () => {
      it("should return a Pokemon", async () => {
        const retrieved = await findPokemonByName("Pikachu");
        expect(retrieved).toMatchObject(pikachu);
      });

      it("should return empty when pokemon not found", async () => {
        const retrieved = await findPokemonByName("Giberrish");
        expect(retrieved).toMatchObject([]);
      });
    });

    describe("findPokemonsWithBaseHPGreaterThan", () => {
      it("should return array with baseHP more than", async () => {
        const retrieved = await findPokemonsWithBaseHPGreaterThan(40);

        expect(retrieved.length).toEqual(2);

        const retrievedNames = retrieved.map((pokemon) => pokemon.name);
        expect(retrievedNames).toMatchObject(["Squirtle", "Wartortle"]);
      });
    });

    describe("findPokemonByNameOrBaseHP", () => {
      it("should return array of 2", async () => {
        const retrieved = await findPokemonWithNameOrBaseHP("Squirtle", 59);

        expect(retrieved.length).toEqual(2);

        const retrievedNames = retrieved.map((pokemon) => pokemon.name);
        expect(retrievedNames).toMatchObject(["Squirtle", "Wartortle"]);
      });
    });
  });
});
