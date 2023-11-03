
// ! este archivo no se ejecuta por medio del servidor
// ! solo se ejecutará una vez para agregar el json a la DB

// 1. conectarnos a la DB
const mongoose = require("mongoose")
const Pokemon = require("../models/Pokemon.model")
const allPokemon = require("./pokemon.json")

mongoose.connect("mongodb://127.0.0.1:27017/simple-app")
.then(() => {
  console.log("conectados a la DB")
  return Pokemon.insertMany(allPokemon)
})
.then(() => {
  console.log("todos los pokemon agregados")
  return mongoose.disconnect()
})
.then(() => {
  console.log("conexion a la DB cerrada")
})
.catch((err) => {
  console.log(err)
})

// 2. buscar algo que necesitamos para acceder a la colección de pokemons

// 3. agregar los pokemon a la DB

// 4. cerrar la conexión