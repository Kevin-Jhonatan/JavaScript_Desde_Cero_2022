console.log("Sesion #11 Array (arreglos) JS");
const array1 = [];
const array2 = [1, true, "Hola", ["A", "B", "C"], [1, 2, 3]];
console.log(array1);
console.log(array2.length, array2);
console.log(array2[2]);
/* Asi se ingresa a la posicion de una matriz */
console.log(array2[3][2]);
console.log(array2[4][2]);
console.log("***************************************************");
/* Otra forma de declarar un array */
const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);
/* Metodo para inicializar un array y llenar todas las posiciones */
const d = Array(100).fill(false);
console.log(d);
/* Algunas practicas que ya no se usan para arreglos */
const e = new Array(1, 2, 3, false);
console.log(e.length);
/*  */
const colores = ["rojo", "verde", "azul"];
console.log(colores);
/* Push siempre pondra el valor al final del array */
colores.push("Negro");
console.log(colores);
/* Este metodo pop quita el ultimo elemento del array y hace lo contrario a push */
colores.pop();
console.log(colores);
/* metodo que nos permite ejecutar una funcion por cada elemento del array  function (valor, posicion)*/
colores.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`),
    function (posicion, id) {
      console.log(`<li id="${id}">${posicion}</li>`);
    };
  document.write(`<li id="${index}">${el}</li>`),
    function (posicion, id) {
      document.write(`<li id="${id}">${posicion}</li>`);
    };
});
/* Son mas de 20 metodos solo para arreglos */
console.log("***************************************************");
