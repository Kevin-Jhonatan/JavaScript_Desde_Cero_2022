console.log("Septima sesio tipos de dato number JS");
let num1 = 2;
console.log(num1);
let num2 = new Number(4);
console.log(num2);
let num3 = 7.22;
/* El metodo toFixed(#) nos ayuda a redondear en caso necesitemos decimales
o solo un numero entero */
/* Pero no es recomendable usarlo para numeros enteros */
console.log("no recomendable para valores enteros", num3.toFixed(0));
console.log(num3.toFixed(1));
console.log(num3.toFixed(2));
console.log(num3.toFixed(3));
console.log(num3.toFixed(4));
console.log(num3.toFixed(5));
console.log("***************************************************");
/* Para numeros enteros necesitamos el metodo parseInt(#variable)
+ Este es muy importante nos ayudara en los formularios input de tipo number*/
console.log(parseInt(num3));
console.log(typeof num3, "=>", num3);
console.log("***************************************************");
/* En este caso convertiremos una cadena de texto en un valor numerico */
let num4 = "5.6";
let num5 = 7.19;
console.log(typeof num4, "=>", num4);
console.log("***************************************************");
/* Suma entre number y string */
console.log(
  "lo que esta realizando no es la suma sino una concatenacion =>",
  num4 + num5
);
console.log("***************************************************");
/* Te string a Number Hacer un Casting*/
console.log("Aqui hacemos un Casting");
/* En el resultado = 12.190000000000001 suma pero con un pequeño error y solo suma la parte entera del las
variables y JS es un lenguaje que no tiene muchos tipos de datos numericos 
en caso de hacer un sitio con muchos calculos sera mejor usar alguna librerias JS para evitar tener
este error
*/
console.log(num5 + parseInt(num4));
/* Con el parseFloat si hace bien la suma */
/* Por que usar una un signo de + para usar los metodos y como en toFixed 
que solo se uso un punto en este caso de tener esa duda saber que estos metodos cuelga del objeto number
y no es necesario pero en caso desees usarlo puedes usar lo siguiente */
console.log(num5 + Number.parseInt(num4));
/* Estos son metodos directos del constructor sobre los tipo de datos numericos */
console.log(num5 + Number.parseFloat(num4));
console.log(num5 + parseFloat(num4));
console.log("***************************************************");

/* O en caso necesite la parte flotante o el tipo de numero float se 
usa el siguiente metodo */
console.log(parseFloat(num3));
console.log("***************************************************");
