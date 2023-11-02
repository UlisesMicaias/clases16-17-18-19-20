//OPERACIONES CRUD:
// CREATE -> POST model.create()
//READ -> GET model.find({propiedad: valor}) o model.findById(valor);
//UPDATE -> PUT model.findeByIdAndUpdate("id", {propiedad: valor})
//DELETE -> DELETE model.deleteMany() o model.deleteOne()

//QUE ES UNA PROMESA Y SUS ESTADOS
//Es un objeto que presentta la eventual finalización de una función
//ESTADOS:

//Pending(pendiente)--> es el estado común, está ejecutandose
//Fullfilled(cumplida)-->sigue el cmaino esperado
//Rejected(rechazada)-->sigue el camino cuando da error