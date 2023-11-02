const consultarUsers = async() => {
    try {
        const response = await axios.get("http://localhost:3000/users/buscar");
        console.log(response.data);
    } catch (e) {
        console.error(e.message);
    }
}

const createUser = async () => {
    try {
        const body = {
            userName: "ulises",
            email: "medina@gamil.com",
            password: "laseptima",
            age: 32
        }
        body.age = Number(body.age);

        const response = await axios.post("http://localhost:3000/users/crear/", body);
        console.log(response.data);
    } catch (e) {
        console.error(e);
    }
};


const upDateUser = async () => {
    try {
        const cambios = {
            userName: "yano sos un usuario de prueba, fuiste editado",
            email: "mail@gamil.com",
            password: "abc1234",
            age: 18
        }
        const response = await axios.put("http://localhost:3000/users/editar/6542a9352f845aad6256a17b", cambios);
        console.log(response.data);
    } catch (e) {
        console.error(e);
    }
} 

const deleteUser = async () => {
    try {
        const response = await axios.delete("http://localhost:3000/users/eliminar/6542b91ef9eb0e879827a2c9");
        console.log(response.data);
    } catch (e) {
        console.error(e)
    }
}



const form = document.querySelector("form");

form.addEventListener("submit", async function(event){
    event.preventDefault();
    
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("pass").value;
    const email = document.getElementById("email").value;
    const age =Number( document.getElementById("age").value);

    // const body = {userName, password, email, age};
    
    // o también
    const body = {
        userName: userName,
        password: password,
        email: email,
        age: age
    }

    try {
        const response = await axios.post("http://localhost:3000/users/crear",body);
        console.log(response.data);
    } catch (e) {
        console.error(e)
    }
});