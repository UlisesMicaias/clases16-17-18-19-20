/*
BCRYPT es una libreria que vamos a utilizar para HASHEO de contraseñas.
El objetivo principal de esta libreria es transformar una contraseña 
legible, en una cadena de texto a pruebas de ataques.

El HASHEO o proceso de HASHING funciona de la siguiente forma:
1. Tomar una contraseña legible y por medio de una salt retornar una 
contraseña que es alateoria y única.
*/

const bcrypt = require("bcrypt");

let userPass = "123456";

const hashPassword = async (psw) =>{
    let hashedPassword = await bcrypt.hash(psw, 10);
    console.log("contraseña segura --->",hashedPassword, "<--- contraseña segura")
   
    return hashedPassword;
}

hashPassword(userPass);

const login = async (psw) => {
    const hashedPassword = "$2b$10$Lne2Xso7ZLWlIHpGaThL4u0htIrGg9smUsJJXVFa.n44RXCwLT7mK";

    const coincide = await bcrypt.compare(psw, hashedPassword);
    console.log(`la contraseña coincide: ${coincide}`);
}

login("$2b$10$Lne2Xso7ZLWlIHpGaThL4u0htIrGg9smUsJJXVFa.n44RXCwLT7mK");
let hola = "es una nueva constante en el archivo bcrypt"