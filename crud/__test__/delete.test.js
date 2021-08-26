const Delete = require("../delete.js");

const db = require("../../db/models/index");
const PokemonModel = db.SimplePokemon;

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

  describe("delete", () => {
    it("should delete by id", async () => {
      let result = await Delete.deletePokemon(1);
      expect(result).toEqual(1);
    });
  });
});
