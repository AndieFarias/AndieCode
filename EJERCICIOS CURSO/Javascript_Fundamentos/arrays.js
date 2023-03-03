// Inicializamos un arreglo
const frutas = ['Zarzamora', 'Manzana', 'Plátano', 'Fresa', 'Naranja'];

//   Recorremos el arreglo
frutas.forEach((elemento, indice, array) => {
// Imprime el elemento actual y su índice
 console.log(elemento, indice);
 });

// Ordenar elementos
frutas.sort();

console.log('Frutas ordenadas:', frutas);

// Revertir el orden
frutas.reverse();

console.log('Frutas al revés:', frutas);

// Filtrar el arreglo

const berries= frutas.filter((elemento) => {
    if(elemento === 'Fresa' || elemento === "Zarzamora") {
        return true;
    }
    return false;
});

console.log("berries: ", berries);

// Mapear el array
const frutasMapeadas =frutas.map((elemento, indice) => {
    return {
        nombreFruta: elemento,
        posicion: indice,
    };
});

console.log('Mapeo: ', frutasMapeadas);

//Reducir el array
const valorInicial ='';
const licuado = frutas.reduce((valorReducido, elemento) => {
    return `${valorReducido} - ${elemento}`;
}, valorInicial);

console.log('Redución: ', licuado);

//Extra
const numeros= [1,2,3,4,5,6,7,8,9,10,11,12];
const resultado= numeros.filter((numero)=> numero>7);
console.log(resultado);