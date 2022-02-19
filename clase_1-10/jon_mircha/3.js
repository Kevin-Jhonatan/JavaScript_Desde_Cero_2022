console.log("Tercera sesion js Fundamentos");
/* Uso para la declaracion de variales => var o let */
/* No es recomendable usar var por que a la hora de declarar esa variable con 
+ la palabra reservada var la variable es global y se aloja en el document global
+ por lo cual en un futuro puede ver un choque de variables o sobreescritura de valor si lo usas
+ y se aloja en el objeto window que es todo el documento que se ve en el navegador
 */

/* Es recomendable usar let por que solo nos sirve dentro de un bloque de código y ya no globalmente
+ como anteriormente se lo hacia
+ ademas es una muy mala practica usar var por la reasignacion de valores 
*/
var c = 10;
let d = 1;
console.log("Soy la variable C = " + c);
console.log("Soy la variable D = " + d);
console.log(window);
console.log(window.c);
console.log(
  "Soy la variable d y salgo indefinido por no ser variable grobal como la variable c = 10 => " +
    window.d
);
var music = "rock";
console.log("Variable Music antes del bloque", music);
/* Esto es un bloque !!! con un comentario de varias lineas */
{
  var music = "pop";
  console.log("Variable music dentro del bloque", music);
}
console.log("Variable music despues del bloque", music);

console.log("Usos con LET ******");
/* Uso con let */
let musics = "rock";
console.log("Variable Music antes del bloque", musics);
/* Esto es un bloque !!! con un comentario de varias lineas */
{
  let musics = "pop";
  console.log("Variable music dentro del bloque", musics);
}
console.log("Variable music despues del bloque", musics);
console.log("***************************************************");
