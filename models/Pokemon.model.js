const mongoose = require("mongoose")

const pokemonSchema = new mongoose.Schema({
  number: Number,
  name: String,
  url: String,
  type: [String]
})

const Pokemon = mongoose.model("Pokemon", pokemonSchema)
// Como el modelo se llama "Pokemon" la colección automaticamente se llará "pokemons"

module.exports = Pokemon