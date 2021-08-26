const db = require("../../db/models/index");
const {
  updatePokemonHpByCategory,
  updatePokemonWithRecords,
} = require("../update.js");
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

  describe("update", () => {
    it("should return update hp when search by category", async () => {
      let result = await updatePokemonHpByCategory(100, "Turtle");
      expect(result).toEqual([2]);
    });

    it("should return actual updated record", async () => {
      let updatedRecord = await updatePokemonWithRecords(100, "Turtle");
      expect(updatedRecord[1].length).toEqual(2);
    });
  });
});
