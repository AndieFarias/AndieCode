//Crear nuevo registro
document.getElementById("registro").addEventListener("submit", crear);

//Función Crear
function crear(e){
    e.preventDefault();
    nombre = document.getElementById("fullName").value; 
    email = document.getElementById("email").value;
    membresia = document.getElementById("membresia").value;
    deporte = document.getElementById("deporte").value;
}
    