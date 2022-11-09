console.log("Hello");
/* 3.- Completar las condiciones de los if del 
siguiente script para que los mensajes de los alert() 
se muestren siempre de forma correcta: */
/* var numero1 = 5;
var numero2 = 8;

if (numero2 > numero1) {
  alert("numero1 no es mayor que numero2");
}
if (numero2 >= 0) {
  alert("numero2 es positivo");
}
if (numero1 < 0 || numero1 != 0) {
  alert("numero1 es negativo o distinto de cero");
}
if (numero1++) {
  console.log(numero1);
  alert(
    "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
  );
}
 */

const mostrar = () => {
  window.name = "Primer pagina";
  let text = "";
  text = text + "<br>Nombre:" + window.name;
  text = text + "<br>Ancho Ventana Externa:" + window.outerWidth;
  text = text + "<br>Alto Ventana Externa:" + window.outerHeight;
  console.log(text);
  text = text + "<br>Ancho Ventana Interna:" + window.innerWidth;
  text = text + "<br>Alto Ventana Interna:" + window.innerHeight;
  console.log(text);
  text = text + "<br>Distancia desde la Izquierda:" + window.screenX;
  text = text + "<br>Distancia desde la Arriba hacia Abajo:" + window.screenY;
  var localizacion = window.location;
  text = text + "<br>Localizacion:" + localizacion;
  var navegador = window.navigator.vendor;
  text = text + "<br>Navegador:" + navegador;
  var p = document.getElementById("uno");
  p.innerHTML = text;
};
const crear = () => {
  var ventana = window.open("1.html", "_blank", "with=500", "heigth=500");
};
const cerrar = () => {
  var ventana = window.close();
};
const enfocar = () => {
  var ventana = window.focus();
};
const imprimir = () => {
  //var ventana = window.print();
  print();
};
/* 10.- Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. 
Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y
 derecha abajo. Para determinar el tamaño de la ventana del navegador, utilizar la función 
 tamanoNavegador() proporcionada. */

const izquierdaSup = () => {
  console.log("izquierdaSup");
  alert("Izquierda Superior!");
};
const izquierdaInf = () => {
  console.log("izquierdaInf");
  alert("Izquierda Inferior!");
};
const derechaSup = () => {
  console.log("derechaSup");
  alert("Derecha Superior!");
};
const derechaInf = () => {
  console.log("derechaInf");
  alert("Derecha Inferior!");
};
const tamañoNavegador = () => {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  alert(
    "Tamaño de pantalla =>  Ancho => " +
      windowWidth +
      " Alto => " +
      windowHeight
  );
};

const test = document.querySelector(".test");
test.addEventListener("click", saludar);
const saludar = () => {
  console.log("Hola soy un evento saludar");
};
