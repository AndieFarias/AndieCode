// class Persona{
//     constructor(nombre, edad){
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
//     }
// }

// let persona=new Persona("andie",32);
// persona.saludar();

/* METODO ESTATICO*/

// class Persona{
//     constructor(nombre, edad){
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
//     }
//     static definicion(){
//         console.log("Una persona soy yo");
//     }
// }
// Persona.definicion();

/* CLASES Y HERENCIAS */
// class Persona{
//     constructor(nombre, edad){
//         this.nombre=nombre;
//         this.edad=edad;
//     }
//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
//     }
//     static definicion(){
//         console.log("Una persona soy yo");
//     }
// }

// class Desarrollador extends Persona{
//     saludoDesarrollador(){
//         this.saludar();
//         console.log("Soy un desarrollador de software");
//     }
// }

// let desarrollador=new Desarrollador("Carlos", 34);

// desarrollador.saludoDesarrollador();
// Desarrollador.definicion();


/* CREAR UN CONSTRUCTOR Y USAR PROPIEDADES DE PALABRA RESERVADA SUPER*/

class Persona{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }
    static definicion(){
        console.log("Una persona soy yo");
    }
}

class Desarrollador extends Persona{

    constructor (nombre, edad, tipo){
        super (nombre, edad);
        this.tipo=tipo;
    }

    saludoDesarrollador(){
        this.saludar();
        console.log(`Soy una ${this.tipo} Developer`);
    }
}

let desarrollador=new Desarrollador("Ana", 34, "Frontend");

desarrollador.saludoDesarrollador();

