console.log("Sesion #14 condicionales JS");
if (4 < 4) {
  console.log("3 si es menor a 4 ", true);
} else if (4 > 3) {
  console.log("Yes!!! 4  es mayor a 3");
}
/* Operador ternario (condicion)? verdadero:falso */
/* Esto se usa mucho en Reactjs, Angular, etc */
let edad = 17;
let mayor = edad >= 18 ? "eres mayor de edad!!" : "no eres mayor de edad";
console.log(mayor);
/* Estructura de control switch () { case1, case2 ,etc} */
let dia = 4;
switch (dia) {
  case 1:
    console.log("Day Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("No se encontro un numero de coincidencias");
    break;
}
console.log();
console.log("***************************************************");
