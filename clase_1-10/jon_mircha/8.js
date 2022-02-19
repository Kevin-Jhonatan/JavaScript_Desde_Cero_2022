console.log("Octaba sesion JS Booleans");
/* Esto no es una cadena de texto */
let bool = true;
console.log(typeof bool, bool);
let bool2 = false;
console.log(typeof bool2, bool2);
console.log("***************************************************");
/* Tambien podemos crear valores booleanos con el constructor booleano
pero no es muy recomendable y existen valores que no son true ni false pero tienden
a valores verdaderos y falsos y ahi si nos sirve el constructor Boolean */
let f = Boolean(true);
let g = Boolean(false);
console.log(f, g);
console.log("***************************************************");
console.log(Boolean(0), "Falso");
console.log(Boolean(-1), "True");
console.log(Boolean(""), "cadena de texto vacio es false");
console.log(
  Boolean(" "),
  "Cadena de texto con un espacio es true y para estos nos sirve construc Booelan"
);
console.log("Truthy en JavaScript");
/* Expresiones que siempre seran verdaderos (true)*/
console.log(
  "if (true)",
  "if ({})",
  "if ([])",
  "if (42)",
  "if (foo)",
  "if (new Date())",
  "if (-42)",
  "if (3.14)",
  "if (-3.14)",
  "if (Infinity)",
  "if (-Infinity))"
);
/* Valores que siempre tienden a negativo 
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("") */
console.log("***************************************************");
