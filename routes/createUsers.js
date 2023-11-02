const express = require("express");
const router = express.Router();//-> exporta el app del index fuera de routes
const userModel = require("../models");//-> importa el model de usuario que creamos con Schemas en la carpeta models

router.post("/", async (req, res)=>{//--->>> localhost:3000/users
    console.log("La contraseña del usuario es: " + req.body.password)
    
    console.log("Inicio del HASHEO...")
    let hashedPassword = req.body.password;
    hashedPassword = await bcrypt.hash(hashedPassword, 10);
    req.body.password = hashedPassword;
    try {//->se está ejecutando la promesa(PENDING)
        await userModel.create(req.body); //->se ejecuta todo el bloque de código exitosamente(fullfilled)
        res.status(201).send("Usuario de prueba creado");
    } catch (err) {
        res.status(404).send(err.message);//rejected pq hubo un tipo de error y se lo notificamos al usuario
    }
});
// await userModel.create({
//     userName: "Prueba Usuario",
//     email: "mail@gamil.com",
//     password: "abc1234",
//     age: 18,
// });

module.exports = router;