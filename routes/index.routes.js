const express = require('express');
const router = express.Router();

const Pokemon = require("../models/Pokemon.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET "/pokemon" => para listar solo los nombres de todos los pokemon
router.get("/pokemon", (req, res, next) => {

  Pokemon.find()
  .select({name: 1})
  .then((response) => {
    console.log(response)
    res.render("pokemon/list.hbs", {
      allPokemons: response
    })
  })
  .catch((err) => {
    next(err)
  })

})

// 1. ruta
// 2. pagina con placeholder
// 3. renderizar la vista
// 4. funcionalidad
// 5. mostrar la info en la vista


// GET "/pokemon/:pokemonId" => para dar los detalles de un pokemon por su id
router.get("/pokemon/:pokemonId", async (req, res, next) => {

  try {
    console.log(req.params)
    const response = await Pokemon.findById(req.params.pokemonId)

    res.render("pokemon/details.hbs", {
      onePokemon: response
    })

  } catch(err) {
    next(err)
  }
})

// GET "/pokemon-search" => para buscar pokemons por un campo de busqueda


module.exports = router;
