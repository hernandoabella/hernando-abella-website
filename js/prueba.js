// const unirArreglos = () => {
//   var arreglo1 = ["Hernando", "Lucas"];
//   var arreglo2 = ["Emma", "Tobias", "Linus"];
//   var arreglo3 = ["Robin"];
//   var resultado = arreglo1.concat(arreglo2, arreglo3); 
//   console.log(resultado);
// }
// unirArreglos(); // [ 'Hernando', 'Lucas', 'Emma', 'Tobias', 'Linus', 'Robin' ]

// function Arbol (nombre){
//   this.nombre = nombre;
// }

// let elArbol = new Arbol('Secuoya');
// console.log('elArbol.constructor es ' + elArbol.constructor);

// var frutas = ["Banana", "Orange", "Apple", "Mango"];
// console.log(frutas); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// function miFuncion() {  
//   console.log(frutas.copyWithin(2,0));
// }

// miFuncion(); // [ 'Banana', 'Orange', 'Banana', 'Orange' ]

// const all = (arr, fn = Boolean) => arr.every(fn);

// console.log(all([4, 2, 3], x => x > 1)); // true
// console.log(all([1, 2, 3])); /// true

// var fruits = ["Banana", "Naranja", "Manzana", "Mango"];
// var f = fruits.entries();

// for (x of f) {
//   console.log(x,'\n');
// }

// var edades = [32, 33, 16, 40];

// function comprobarAdultez(edad) {
//   return edad >= 18;
// }

// function miFuncion() {
//   console.log(edades.every(comprobarAdultez));
// }

// miFuncion();

// var edades = [32, 33, 12, 40];
// var entrada = prompt("Ingresa tu edad");

// function comprobarAdultez(edad) {
//   return edad >= entrada;
// }

// function miFuncion() {
//   console.log(edades.every(comprobarAdultez));
// }

// miFuncion();

// let frutas = ["Banana", "Naranja", "Manzana", "Mango"];
// let x;
// x = frutas;

// const miFuncion = () =>{
// 	console.log(x = frutas.fill("Kiwi"));
// }

// miFuncion(); // [ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]

// const allEqual = arreglo => arreglo.every(valor => valor === arreglo[0]);

// console.log(allEqual([1, 2, 3, 4, 5, 6])); // false
// console.log(allEqual([1, 1, 1, 1])); // true

// Devuelve un arreglo de todos los valores que estan en el arreglo edades que sean mayor o igual que 18.

// let edades = [32, 33, 16, 40];

// const comprobarAdultez = (edad) => {
//   return edad >= 18;
// }

// const miFuncion = () => {
//   console.log(edades.filter(comprobarAdultez));
// }

// miFuncion(); // [ 32, 33, 40 ]

// const edades = [3, 10, 18, 20];

// const comprobarAdultez = (edad) => {
//   return edad >= 18;
// }

// const miFuncion = () => {
//   console.log(edades.find(comprobarAdultez));
// }

// miFuncion(); // 18

// const arreglo = [5, 12, 8, 130, 44];

// const esNumeroLargo = (elemento) => elemento > 13;

// console.log(arreglo.findIndex(esNumeroLargo)); // 3

// const aproximadamenteIgual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

// console.log(aproximadamenteIgual(Math.PI / 2.0, 1.5708)); // true

// let frutas = ["Manzana", "Naranja", "Cereza"];
// frutas.forEach(miFuncion);

// function miFuncion(articulo, indice) {
//   console.log(indice + ":" + articulo + "\n"); 
// }

// miFuncion();

// // 0:Manzana
// // 1:Naranja
// // 2:Cereza 
// // undefined:undefined

// // Para cada elemento en el arreglo: actualiza el valor con 10 veces del valor original.

// var numeros = [65, 44, 12, 4];
// numeros.forEach(miFuncion);

// function miFuncion(articulo, indice, arreglo) {
//   arreglo[indice] = articulo * 10;
// }

// console.log(numeros); // [ 650, 440, 120, 40 ]

// Obtén la suma de todos los números en el arreglo

// let suma = 0;
// const numeros = [65, 44, 12, 4];
// numeros.forEach(miFuncion);

// function miFuncion(articulo) {
//   suma += articulo;
//   console.log(suma);
// }

// miFuncion();
// // 65 
// // 109
// // 121
// // 125
// // NaN

// let miArreglo = Array.from("ABCDEFG");

// console.log(miArreglo);

// //[
// //   'A', 'B', 'C',
// //   'D', 'E', 'F',
// //   'G'
// //  ]

// // Comprueba si el arreglo frutas incluye "Mango":

// var frutas = ["Banana", "Naranja", "Manzana", "Mango"];
// var n = frutas.includes("Mango");

// console.log(n); // true



