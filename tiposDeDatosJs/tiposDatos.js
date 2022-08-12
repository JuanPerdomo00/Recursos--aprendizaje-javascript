//! tipos de datos en javascript
//! string
//! number
//! boolean
//! undefined
//! null
//! object
//! array

//> tipo de dato string
var nombre = "Juan";
console.log(nombre);

//> tipo de dato number

var numero = 1000;
console.log(numero);

//> tipo de dato boolean
var verdadero = true;
console.log(verdadero);

// > tipo de dato undefined
var indefinido;
console.log(indefinido);

//> tipo de dato null
var nulo = null;
console.log(nulo);

//> tipo de dato object
var persona = {
  nombre: nombre,
  apellido: "Perdomo",
  edad: 30,
};
console.log(persona);

//> tipo de dato array
var array = [1, 2, 3, 4, 5];
console.log(array);

// > tipo de dato function
function sumar(a, b) {
  return a + b;
}
console.log(sumar(1, 2));

// > tipo de dato symbol
var simbolo = Symbol("simbolo");
console.log(simbolo);

//> Tipo clase es una funcion
class Persona {
    constructor(nombre, apellido, edad) { // constructor es un metodo, y recibe parametros
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

var persona2 = new Persona("Jakepy", "redhat", 20);

console.log(persona2);


// * ===========================================================

//? podemos reescribir la variable
//? La variables son dinamicas Javascript es dinamico
nombre = "vicent";

// > Ver el tipo de dato de una variable
console.log("\n\n**Tipos de datos**");
console.log(typeof nombre);           //* string
console.log(typeof numero);          //* number
console.log(typeof verdadero);      //* boolean
console.log(typeof indefinido);    //* undefined
console.log(typeof nulo);         //* object
console.log(typeof persona);     //* object
console.log(typeof array);      //* object
console.log(typeof sumar);     //* function
console.log(typeof simbolo);  //* symbol
console.log(typeof Persona); //* function