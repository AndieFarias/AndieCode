// Usando operador for tabla del 2
for (let i = 1; i<=10; i++) {
    console.log(`2 x ${i} = ${2*i}`);
}

// Crear 2 arreglos como los siguientes const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];
const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];
const nombreMayusculas= []

nombres.forEach(function(nombre){
    nombreMayusculas.push(nombre.toUpperCase());
});

console.log(nombreMayusculas);

// Crea variable nombreMinusculas y crear nuevo arreglo a partir de nombreMayusculas

const nombreMinusculas= nombreMayusculas.map(function(nombre){
    return nombre.toLowerCase();
});

console.log(nombreMinusculas);

// filtroNombres, usar arreglo nombres, funcion filter para obtener solo nombres luis
const filtroNombres= nombres.filter(function(nombre){
    return nombre.toLowerCase() ==='luis';
});

console.log(filtroNombres);
// new array con el nombr enumeros y agrega const numeros= [2,4,6,8,10]

// nueva variable total- usar funcion reduce para sumar todos los valores. Imprime el resultado de la variable total. El resultado debe ser 30.