console.log("Sexta clase Template String concatenacion y interpolación");
let one = "kevin";
let twos = "mollo";
/* Asi se concatena normalmente */
let saludo1 = "Hola mi nombre es " + one + " " + twos;
console.log(saludo1);
/* Interpolación de variables nos sirve mucho para evitar hacer todo ese 
+ rollo de concatenacion y tenerlo concatenado de manera mas eficaz
+ y se usara los TEMPLATE STRING*/
/* Seria recomendable usar este template string */
let saludo2 = `Hola soy un template String ${one} ${twos}.`;
/* Otra caracteristica tiene los template strings muchas veces cuando hacemos aplicaciones
dinamicas con JS se usara mucho en la parte del DOM para interactuar con el HTML y generaremos codigo HTML 
 */
console.log(saludo2);
/* Aqui nos obliga a que todo este en una sola linea y no podemos 
+ usar los datos dinamicos y por lo cual usaremos los templates strigns abajo
+ y no respeta la identacion*/
let ul =
  "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>";
console.log(ul);
console.log("***************************************************");
/* Esta es la gran diferencia a la hora de usar template string no nos da erro cuando esta
+ dividido en varias lineas ademas que podemos poner variables dinamicas dentro las etiquetas
+ respeta identacion y todo dinamico */
let ul2 = `
  <ul>
    <li>${saludo1}</li>
    <li>Verano</li>
    <li>Otoño</li>
    <li>${saludo2}</li>
  </ul>`;
console.log(ul2);
document.write(ul2);
/* Otra forma de concatenar de manera tediosa */
let ul3 = "<ul>";
ul3 += "<li>Primavera</li>";
ul3 += "<li>Verano</li>";
ul3 += "<li>Otoño</li>";
ul3 += "<li>Invierno</li>";
ul3 += "</ul>";
console.log(ul3);
console.log("***************************************************");
