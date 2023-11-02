const express = require("express");
const router = express.Router();//-> exporta el app del index fuera de routes
const userModel = require("../models");//-> importa el model de usuario que creamos con Schemas en la carpeta models
const deleteUsers = require("./deleteUsers")//-->> importa la url de eliminar usuarios para que la carpeta quede más limpia y ordenada
const createUsers = require("./createUsers");
const upDateUsers = require("./upDateUsers");
const searchUsers = require("./searchUsers")

router.use("/eliminar", deleteUsers);//el /eliminar significa que cuando se ingrese por url localhost:3000/eliminar va a usar las operaciones CRUD que esten en el archivo deleteUsers.js
router.use("/crear", createUsers);//el /crear significa que cuando se ingrese por url localhost:3000/crear va a usar las operaciones CRUD que esten en el archivo createUsers.js
router.use("/editar", upDateUsers);
router.use("/buscar", searchUsers);


router.get("/", (req, res) => {
    res.status(200).send("Accediste a /GET");
});

router.post("/", (req, res) => {
    const { body } = req;
    console.log(`Usuario creado. Nombre: ${body.userName}, Email: ${body.email}, Contraseña: ${body.password}, Edad: ${body.age}`);
    res.status(202).send("Usuario creado");
});















//PARTE PARA BUSCAR USUARIOS
// router.get("/", (req, res) => {
//     res.status(200).send("Accediste a /GET");
// });

// router.get("/users", async (req, res) => {
//     const allUsers = await userModel.find({});//-> esto agarra todos los modelos de usuarios(documentos) y los muestra en el puerto
//     res.status(200).send(allUsers);
// });

// router.get("/users/buscarPorEdad/:edad", async (req, res) => {
//     const { edad } = req.params;
//     const userFoundByAge = await userModel.find({age: edad});
//     res.status(200).send(userFoundByAge);
// });

// router.get("/users/buscarPorId/:userId", async (req, res) => {
//     const { userId } = req.params; //-> req.params ingresado desde el localhost
//     const userFoundById = await userModel.findById(userId);//-> guarda en una constante el usuario encontrado con req.params mediante findByIdy y lo guarda en una variable
//     res.status(200).send(userFoundById);//-> retorna el usuario encontrado
// });

//----------------------------------------------------------------------------------------------------------------

//PARTE PARA EDITAR USUARIOS
// router.put("/users/cambiarPorId/:userId", async (req, res) => {
//     const { userId } = req.params;//-> agarra el id que el usuario haya ingresado
//     const cambios = req.body;
//     await userModel.findByIdAndUpdate(userId, cambios);//-> toma el id y el segundo valor es el que cambia la información del usuario
//     res.status(202).send("Usuario creado exitosamente");
// });


//--------------------------------------------------------------------------------------------------------------------------------

//PARTE PARA ELIMINAR USUARIOS
// router.delete("/users/eliminar/:userId", async (req, res)=>{
//     const { userId } = req.params;
//     await userModel.deleteOne({_id: userId});//-> agarra la propiedad _id y elimina el userId del req.params
//     res.status(202).send("Usario eliminado exitosamente");
// });

// router.delete("/users/eliminar", async (req, res)=>{
//     //await userModel.deleteOne({age: 39});-> agarra la primera coincidencia y la elimina
//     const usersEliminated = await userModel.deleteMany(req.body)//-> elimina a todos los usuarios que contenga el valor de 18 años
//     res.status(202).send(`la cantidad de usuarios eliminados son: ${usersEliminated.deletedCount}`)
//     // res.status(202).send("Usario eliminado exitosamente");
// });

//---------------------------------------------------------------------------------------------------------------------------

//PARTE PARA CREAR USUARIOS
// router.post("/users", async (req, res)=>{
//     try {//->se está ejecutando la promesa(PENDING)
//         await userModel.create(req.body); //->se ejecuta todo el bloque de código exitosamente(fullfilled)
//         // await userModel.create({
//         //     userName: "Prueba Usuario",
//         //     email: "mail@gamil.com",
//         //     password: "abc1234",
//         //     age: 18,
//         // });
//         res.status(201).send("Usuario de prueba creado");
//     } catch (err) {
//         res.status(400).send(err.message);//rejected pq hubo un tipo de error y se lo notificamos al usuario
//     }
// });


module.exports = router;