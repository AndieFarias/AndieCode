// Declaración de Clase - Clase Nombrada*

class Rectangulo {
    constructor(alto, ancho) {
    // Con la palabra `this` se hace referencia al ámbito de la clase
    // Las propiedades `alto` y `ancho` representan el estado de la clase
      this.alto = alto;
      this.ancho = ancho;
    }
  
    // Getter (encapsulamiento)
    get area() {
      return this.calcularArea();
    }
  
  // Método, comportamiento de la clase
    calcularArea () {
      return this.alto * this.ancho;
    }
  };
  
  // Expresión de clase - Clase Anónima
  
  const RectanguloAnonimo = class {
      constructor(alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
  };
  
  // Instanciamos la clase...
  const cuadrado = new Rectangulo(10, 10);
  
  // Imprime: `Area: 100`
  console.log(`Area: ${cuadrado.area}`);
  
  // Clase padre
  
  class Animal {
    constructor(nombre) {
    this.nombre = nombre;
  }
  
    hablar() {
      console.log(this.nombre + ' hace un ruido.');
    }
  }
  
  const animal = new Animal('Jirafa');
  
  // Imprime: `Animal dice: Jirafa hace un ruido`
  console.log(`Animal dice: ${animal.hablar()}`);
  
  // Clase hija, hereda de la clase `Animal`
  
  class Perro extends Animal {
      constructor(nombre) {
      super(nombre);
    }
  
  // Sobrecarga del método `hablar`, polimorfismo
    hablar() {
      console.log(this.nombre + ' ladra.');
    }
  }
  
  const perro = new Perro('Firulais');
  
  // Imprime: `Perro dice: Firulais ladra`
  console.log(`Perro dice: ${perro.hablar()}`);