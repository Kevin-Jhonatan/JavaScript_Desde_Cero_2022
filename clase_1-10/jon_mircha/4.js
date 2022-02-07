console.log("Cuarta sesion");
const apellido = "Mollo";
console.log("apellido => ", apellido);
const A = 1;
/* A = 2; */
console.log(A);
/* Pero al declarar un objeto o clase como constantes si se puede reasignar los datos 
pero el objeto no cambia y solo cambia los datos */
let objeto = {
  nombre: "kevin",
  edad: 23,
};
const colores = ["blanco", "negro", "azul"];
console.log(objeto);
console.log(colores);
/* el objeto con un punto nos permite agregar valores nuevos a nuestro objeto */
objeto.correo = "keevj1999@gmail.com";
console.log(objeto);
/* Push nos sirve para añador valores en un array */
colores.push("anaranjado");
console.log(colores);
/* Aqui depende del tipo de dato como explicaba el objeto y array no cambian por ser datos o valores compuestos
y lo que cambia simplemente es contenido o sus posiciones o elementos
y en los valores primitivos si se usa const no se podrá cambiar sus datos por que acceden directo al valor 
y ocurre lo contario con los valores compuestos por que sigue siendo el mismo objeto y array*/
console.log("***************************************************");
