const express = require("express");
const router = express.Router();//-> exporta el app del index fuera de routes
const userModel = require("../models");//-> importa el model de usuario que creamos con Schemas en la carpeta models

router.get("/", async (req, res) => {
    const allUsers = await userModel.find({});//-> esto agarra todos los modelos de usuarios(documentos) y los muestra en el puerto
    res.status(200).send(allUsers);
});

router.get("/buscarPorEdad/:edad", async (req, res) => {
    const { edad } = req.params;
    const userFoundByAge = await userModel.find({age: edad});
    res.status(200).send(userFoundByAge);
});

router.get("/buscarPorId/:userId", async (req, res) => {
    const { userId } = req.params; //-> req.params ingresado desde el localhost
    const userFoundById = await userModel.findById(userId);//-> guarda en una constante el usuario encontrado con req.params mediante findByIdy y lo guarda en una variable
    res.status(200).send(userFoundById);//-> retorna el usuario encontrado
});

module.exports = router;