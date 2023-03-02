//Crear nuevo registro
document.getElementById("registro").addEventListener("submit", crear);

if (!localStorage.getItem("cliente")){
    localStorage.setItem("cliente", JSON.stringify([]));
}

//Función Crear
function crear(e){
    e.preventDefault();
    nombre = document.getElementById("fullName").value; 
    email = document.getElementById("email").value;
    membresia = document.getElementById("membresia").value;
    deporte = document.getElementById("deporte").value;
    
    let cliente ={
        nombre,
        email,
        membresia,
        deporte
    }

    const clientes=JSON.parse(localStorage.getItem("cliente"))
    clientes.push(cliente)
        localStorage.setItem("cliente", JSON.stringify(clientes));
  
    console.log(cliente);

    document.getElementById("fullName").value="";
    document.getElementById("email").value=""; 
    document.getElementById("membresia").value=""; 
    document.getElementById("deporte").value="";  
    leer();
}

//Funcion leer
function leer(){
    let cliente = JSON.parse(localStorage.getItem("cliente"));
    const contenedor=document.getElementById("contenedor");
    contenedor.innerHTML=""
    for(let i=0; i < cliente.length; i++){
        let nombre = cliente[i].nombre
        // let deporte = cliente[i].deporte
        const tarjeta=document.createElement("div")
        tarjeta.className="tarjeta"
        tarjeta.innerHTML =
        `
            <div class="avatar"> 
                <!-- <img src="https://mycyberuniverse.com/images/articles/Milena/how-save-memoji-as-png/thumbnail.png"> -->
            </div>
            <div class="datos">
                <h3 class="nombre">${nombre}</h3>
            </div>
            <div class="editar">
                <button type="button" class="btn btn-outline-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                      </svg>
                </button>
            </div>
        `
        contenedor.appendChild(tarjeta);
    }   
}
