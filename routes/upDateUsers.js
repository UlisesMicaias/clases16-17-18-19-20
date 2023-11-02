const express = require("express");
const router = express.Router();//-> exporta el app del index fuera de routes
const userModel = require("../models");//-> importa el model de usuario que creamos con Schemas en la carpeta models


router.put("/:userId", async (req, res) => {
    const { userId } = req.params;//-> agarra el id que el usuario haya ingresado
    const cambios = req.body;
    await userModel.findByIdAndUpdate(userId, cambios);//-> toma el id y el segundo valor es el que cambia la información del usuario
    res.status(202).send("Usuario editado exitosamente");
});

module.exports = router;