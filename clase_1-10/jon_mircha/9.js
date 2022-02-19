console.log("Novena sesion JS UNDEFINE, NULL and NAN");
/* Se explicara bien las diferencia y conceptos entre estos */
let h1;
/* Undefine */
console.log(
  ` h1 es la variable indefinida es que no tiene ningun valor asignado ${h1}`
);
/* null */
let nulo = null;
console.log(
  `Aqui la variable nulo tiene asignado el valor de nulo se le asigno 
  intencionalmente ${nulo}`
);
/* NaN => Not a Number */
let noEsUnNumero = "Hola" * 3 + 5;
console.log(
  noEsUnNumero,
  "cuando tratamos de hace operaciones con string y number =>",
  noEsUnNumero
);
console.log();
console.log("***************************************************");
