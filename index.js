require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();//-> es la instancia de express, lo que se importa del servidor
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const dbUser = process.env.DB_USER; //esconde las contraseñas y nombre de usuario para tener mucho más seguro nuestro proyecto 
const dbPass = process.env.DB_PASSWORD;
const url = `mongodb+srv://${dbUser}:${dbPass}@ulisesp5.8r9uhnv.mongodb.net`;


app.use(express.json())//-> sirve para leer los req.body
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));


app.use("/users", routes);//-> usa la logica de routes cuando ingreses a /users
// app.use("/", routes);

const connectMongo = async ()=> {
    try {//-> intentara ejecutar todo el bloque de codigo, si algo falla se detiene y envia un error
        console.log("Intentando conectar a la DB...");
        await mongoose.connect(url);//-> espera a conectarse con mongoDB
        app.listen(3000, () => {//-> luego de conectarse a mongoDB ejecuta el app listen para levantar el puerto 3000
            console.log("Servidor levantado en el puerto 3000")
        });
    } catch (err) {//-> capta el error que el try envío y lo devuelve al usuario
        console.error(err);
    };
};

connectMongo();//-> ejecuta la funcion asincronica
