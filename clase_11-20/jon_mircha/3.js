console.log("Sesion #13 Tipos de operadores JS");
/* Operadores aritmeticos */
let as = 10 + 10 * 2 - 3;
let as2 = (10 + 10) * 2 - 3;
let as3 = 5 / 2;
let as4 = 5 % 2;
/* + - * / % () */
console.log(as);
console.log(as2);
console.log(as3);
console.log(as4);
/* Operadores relacionales */
let o1 = 1 >= 2;
let o2 = 1 <= 2;
let o3 = 1 == 2;
let o4 = 1 === 2;
let o5 = 1 != 2;
let o6 = 1 !== 2;
console.log(o1);
console.log(o2);
console.log(o3);
console.log(o4);
console.log(o5);
console.log(o6);
console.log("***************************************************");
/* Comparacion de valor no es muy recomendado */
console.log("7" == 7);
/* compraracion de valor y tipo de dato y es una buena practica usar 3 iguales y no 2 */
console.log("7" === 7);
console.log(0 == false);
/* Operadores de incremento y decremento */
let i = 1;
/* Asi se incrementa una variable */
i = i + 2;
console.log(i);
/* Esta es como su abreviacion del valor a incrementar anterior */
i += 2;
console.log(i);
/* o decrementar con  */
i -= 2;
console.log(i);
/* Operador Unario incrementara de uno en uno*/
i++;
console.log(i);
i--;
console.log(i);
console.log("***************************************************");
/* igual funciona lo siguiente */
++i;
console.log(i);
console.log("***************************************************");
/* Operadores logicos */
/* Not => si negamos cualquier cosa se obtendra en valor opuesto y
lo negamos con el signo de admiracion*/
console.log(!true);
console.log(!false);
/* OR se usa cuando tenemos 2 condiciones y una de ambas tiene que cumplirse */
console.log(3 < 2 || 5 === 5);
/* AND => && ambas se tienen que cumplir y se valida */
console.log(1 < 2 && 5 === 5);
console.log();
console.log();
console.log("***************************************************");
