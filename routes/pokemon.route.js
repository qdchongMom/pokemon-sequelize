const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const createPokemon = require("../crud/create.js");
const { findAllPokemons } = require("../crud/read.js");
const { updatePokemonHpByCategory } = require("../crud/update.js");

router.post("/", async (req, res, next) => {
  try {
    const result = await createPokemon(req.body);
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await findAllPokemons();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:category/:hp/", async (req, res, next) => {
  try {
    let hp = req.params.hp;
    let category = req.params.category;

    const result = await updatePokemonHpByCategory(hp, category);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
