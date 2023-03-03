const nombres= [];

let nombre1= "Andie";
let nombre2= "Carlos";
let nombre3= "Susana";
let nombre4= "Pancho";
let numero= 20;
let estatus= false;

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
console.log(nombre4);
console.log(numero);
console.log(estatus);

const nombres2= ["Andie", "Carlos", "Susana", 45, true];
console.log(nombres2);

const nombres3= new Array("Andie", "Carlos", "Susana", 88, false);

console.log(nombres3[1]);
console.log(nombres3[5]);

nombres3[0]= "Alejandra";
console.log(nombres3);

// AGREGAR Y ELIMINAR DATOS EN UN ARREGLO

//Agregar elemento al final
const nombres4= new Array("Andie", "Carlos", "Susana", 88, false);
nombres4.push("México");
console.log(nombres4);

//Agregar elemento al inicio
nombres4.unshift("Juan");
console.log(nombres4);

//Eliminar ultimo elemento
const nombres5= new Array("Andie", "Carlos", "Susana", "Panfilo", "Ana");
nombres5.pop();
console.log(nombres5);

//Eliminar al inicio
nombres5.shift();
console.log(nombres5);