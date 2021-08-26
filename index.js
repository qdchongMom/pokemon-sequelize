const db = require("./db/models/index.js"); // --> REPLACE THIS
const createPikachu = require("./crud/create");
const Read = require("./crud/read");
const Update = require("./crud/update");
// [1] Just test connection, we don't neeed this in actual. --> REMOVE THIS SECTION
// [2] For dev exploration convenience, we forced synchronisation.
db.sequelize.sync({ force: true }); // --> REPLACE THIS
// db.sequelize.sync(); // --> REPLACE THIS

// [3] Use this syntax to refer to the model in the app/router code later --> ADDED THIS SECTION
// const SimplePokemon = await db.SimplePokemon.create();
setTimeout(createPikachu, 200);
setTimeout(() => Read.findPokemonsWithBaseHPGreaterThan(40), 500);
setTimeout(() => Read.findPokemonWithNameOrBaseHP("Pikachu", 59), 500);
setTimeout(() => Update.updatePokemonHp(200), 700);
