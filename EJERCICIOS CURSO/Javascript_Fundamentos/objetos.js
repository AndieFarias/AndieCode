//Objeto sin propiedades

/* let persona= {}
console.log(persona)
 */

//Objeto con propiedades
// let persona= {
//     nombre:"Andie",
//     apellido:"Farias",
//     edad:31,
//     estudios:["Licenciatura", "Maestria"],
//     hijos:false
// }

// console.log(persona.apellido);

// console.log(persona.hijos);

/* SEGUNDA FORMA DE DECLARAR UN OBJETO */

// let persona=new Object()
// persona.nombre="andie",
// persona.apellido="farias",
// persona.edad= 32,

// console.log(persona);

/* TERCERA FORMA DE DECLARAR UN OBJETO */
let persona=new Object()
persona["nombre"]="Andie",
persona["apellido"]="Farias",
persona["edad"]=32,
persona.pais="Mexico"
delete persona.pais

console.log(`Mi nombre es: ${persona.nombre} y mi apellido es ${persona.apellido}`)

