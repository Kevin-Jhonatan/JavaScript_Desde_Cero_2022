console.log("Décima sesio JS Métodos");
/* Las funciones son un conocidos como objetos pero son bloques
de codigo reutilizables
Una representativa son las arrow Function 
*/
// esta es una funcion creada para saludar
function saludar() {
  console.log("Soy la funcion saludar!!");
}
/* Aqui invocamos a la funcion o metodos*/
saludar();
/* Este es un ejemplo de un metodo que recibe parametros en este
caso recibe n1 y e1 que son nombre y edad */
/* Tambien se puede poner valores estaticos n1 = "Kevin", e1 = 10 */
persona("Kevin", 22);
/* Se puede invocar un metodo desde cualquier lugar del codigo
y es una funcion expresada y se puede invocar estando antes del metodo declarado
como se ve en el metodo persona 
=> Esto es el hoisting al igual que una variable declarada con var y JS lo sube a un
metodo globar 1.- variables, 2.- metodos*/
function persona(n1, e1) {
  nombre = n1;
  edad = e1;
  console.log(`Hola soy ${nombre} y tengo ${edad} años`);
}
persona("Kevin", 22);
/* Metodo que nos retorne algun valor */
function cantar() {
  /* En caso de haber un return primero que otro se detendra o ignorara
  todo el valor que este anterior al return */
  let soyReturn =
    "Soy Return y me devolvere como dato de una variable desde return";
  return soyReturn;
  return "Yo me ejecuto e ignoro todo lo demas despues de mi => return";
  /* para ver el valor que se esta regresando el metodo declaramos lo siguiente*/
  return "Hola estoy retornando la musica de Juan Valdez Y soy Cantar";
}
/* Es importante guardarlo en una variable
para que console.log no se ejecute varias veces con el metodo
y despues lo mostramos la variable con el valor retornado del metodo */
let valorDeCantar = cantar();
console.log(valorDeCantar);
/* Crear metodo y asignarlo a una variable Metodos expresadas */
/* Metodos anónimos */
/* Primera forma de declarar un metodo expresado  metodo o function anonima*/
/* Aqui no se puede inicializar el metodo expresado en cualquier lugar del código
y es la diferencia con el metodo declarado */
/* funcionExpresada(); */
/* En librerias como Angular y demas se esta empezando a usar las funciones anónimas */
const funcionExpresada = function () {
  console.log(
    "Esto es un metodo expresada, es decir una funcion que se le ha asignado como valor una variable si invocamos esta funcion antes de su definicion JS nos dirá!!! esto"
  );
};
console.log("***************************************************");
funcionExpresada();
/* Segunda forma de declarar un metodo expresado */
const functionExpresada = () => {};
console.log("***************************************************");
