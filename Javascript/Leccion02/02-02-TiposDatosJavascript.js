/*
Ejemplos de tipos 
de datos en JavaScript
*/

//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//typeof, nos demuestra el tipo de la variable (string, number, object, etc.)
nombre = 10
console.log(typeof nombre)

//Tipo de dato numerico
var numero = 1000;
console.log(numero)

//Tipo de dato object
var objeto = {
    nombre : "Carlos",
    apellido : "Arango",
    telefono : "333334454" 
}

console.log(objeto)

//Tipo de dato boolean (true , false)
var bandera = true
console.log(bandera)

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion)

//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

//Tipo clase es una function
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona)

//Tipo de dato undefined
var x; 
console.log(x);

x = undefined;
console.log(x)

//Null = ausencia de valor (Tipo de dato object)
var y = null;
console.log(y);

var autos = ["BMW", "Audi", "Volvo"];
console.log(autos)
console.log(typeof autos);

var z = "";
console.log(z);
console.log(typeof z)
 


