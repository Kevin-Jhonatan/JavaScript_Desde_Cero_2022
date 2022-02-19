/* console.log("Quinta Sesion Tipos de datos en JS"); */
let nam = "kevin";
let lastName = "Mollo";
let saludo = new String("Hola mundo");
const string4 = new String("Un objeto String");
console.log("***************************************************");
console.log(nam, lastName, saludo, string4);
console.log("*****************************************");
console.log(nam.length, lastName.length, saludo.length);
/* Lo mas comun en usar es las cadenas con doble comilla
+ ademas de el objeto String se puede usar pero no es muy usado
+ el lenght nos ayuda a saber la longitud de caracteres que tenga una 
+ cadena de caracteres
*/
/* Como hacer que solo ingresen mayusculas, minusculas metodos */
let lorem = "     Lorem ng versions, of Lorem Ipsum.         ";
console.log(
  nam.length,
  lastName.length,
  saludo.length,
  nam.toUpperCase(),
  lastName.toUpperCase(),
  saludo.toUpperCase(),
  /* Para buscar coincidencias dentro de una cadena de texto */
  lorem.includes("lorem"),
  lorem.includes("Kevin"),
  lorem,
  /* Este lorem se encarga de borrar los espacios en blanco innesesarios como se podra ver en la consola 
  + del navegador */
  lorem.trim(),
  /* Convertir una cadena de texto a un Arreglo o Array 
  + generara un arreglo con un separador cada palabra de la cadena
  + y este lorem ipsun tiene en cada espacio una posicion en el arreglo
  + con una coma o con espacios
  + y los espacios en blanco cuenta como una posicion*/
  lorem.split(" "),
  lorem.split(",")
);
console.log("***************************************************");
