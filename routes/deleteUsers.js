const express = require("express");
const router = express.Router();//-> exporta el app del index fuera de routes
const userModel = require("../models");//-> importa el model de usuario que creamos con Schemas en la carpeta models

router.delete("/:userId", async (req, res)=>{//-->> esto es http://localhost:3000/users/eliminar/porId
    const { userId } = req.params;
    await userModel.deleteOne({_id: userId});//-> agarra la propiedad _id y elimina el userId del req.params
    res.status(202).send("Usario eliminado exitosamente");
});

router.delete("/", async (req, res)=>{//-->> esto es http://localhost:3000/users/eliminar
    //await userModel.deleteOne({age: 39});-> agarra la primera coincidencia y la elimina
    const usersEliminated = await userModel.deleteMany(req.body)//-> elimina a todos los usuarios que contenga el valor de 18 años
    // res.status(202).send(`la cantidad de usuarios eliminados son: ${usersEliminated.deletedCount}`)
    res.status(202).send("Usario eliminado exitosamente");
});

module.exports = router;