const mongoose = require("mongoose");

//es el modelo que van a tener todos los usuarios
const users = new mongoose.Schema(
    {
    userName: {type: String, required: true},//--> required le dice al modelo que es obligatorio completar el campo de userName, email y password
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: Number, required: true, min: [18, "Debes tener al menos 18 años para crear un usuario"]},//-> el array contiene el minimo y un mensaje que se ejecutará 
    songs: [{type: String}]
});

//exporta el modelo de usuario y como se va a ver en la DB "users"
module.exports = mongoose.model("users", users);