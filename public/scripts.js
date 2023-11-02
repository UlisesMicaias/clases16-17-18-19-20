const btn = document.querySelector("#request");
const lista = document.querySelector("#lista");

const  addElements = async () => {
    try {
    console.log("Hiciste click");
    const response = await axios.get("http://localhost:3000/users/buscar");
    console.log(response.data);

    //toda esta linea actualiza a los usuarios
    while (lista.firstChild) {//comprueba que exista elementos
        lista.removeChild(lista.firstChild)//remueve hasta que ya no hayan elementos
    }

    for (let i = 0; i < response.data.length; i++) {
        const objectUser = response.data[i];
        //console.log(objectUser.userName) trae todos los usuarios que están en el objeto de usuarios
        const li = document.createElement("li");//-> crea el elemeneto list item para la ordered list que tenemos ene el html
        li.textContent = objectUser.userName;//-> por cada click va cambiar el textContent de los list item que se crearon y están vacíos los nombres de los usuarios
        lista.appendChild(li);//->y por ultimo agrega al DOM los list item con los nombres de los usuarios
    }
    } catch (e) {
        console.error(e.message);
    }       
};

btn.addEventListener("click", addElements);
