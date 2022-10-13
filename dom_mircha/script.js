console.log(
  "*************** Codigo para que la maquina hable class 61 ********************"
);
console.log(window);
console.log(document);
/* let texto = "Hola soy Kevin Jhonatan";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */
console.log("*************** Elementos del DOM ********************");
console.log(window.document);
console.log(document.head);
console.log(document.body);
/* Para ver la estructura de HTML5 y no funciona si fuese document.html si no como la linea 15 */
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.forms);
console.log(document.styleSheets);
console.log(
  document.scripts,
  "aqui trae 2 archivos por que live server igual trae su script js y cuenta el numero de etiquetas script en el html"
);
/* metodo para mapear lo que seleccionamos con js */
setTimeout(() => {
  console.log(document.getSelection().toString);
  console.log("me ejecute");
}, 3000);
document.write("<h2>Hola World insertado desde un document.write</h2> ");
console.log(
  "*************** class 62 nodos, elementos y selectores ********************"
);
/* Lo que mas usaremos son los nodos de tipo Texto = texto dentro la etiqueda de HTML 
y nodos de tipo Elemento = Una etiqueta de HTML */
/* Metodos que ya no se usan */
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
/* Estos 3 metodos de arriba fueron reemplazados por 2 metodos muy populares que son: ojo que aqui
si es necesario especificar si es un ID o CLASS con . o # pero en rendimiento el querySelector es
mas lento que getElementById */
console.log(document.querySelector("#menu"));
/* tambien sirve para saber todos los enlaces que hay en la pagina pero siempre devolvera al primero
que encuentre */
console.log(document.querySelector("a"));
/* Para traernos todas las etiquetas de tipo link de usa querySelectorAll ambos querys devuelven
 lista de nodos*/
let a = document.querySelectorAll("a").length;
document.write("Soy la cantidad de link que hay => ", a);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
/* Tambien se digue usando el metodo de abajo */
console.log(document.getElementById("menu"), "ById");
console.log(
  "*************** class 63 atributos = href, placeholder, etc",
  "y dataAtributos = desde HTML5 nos permite crear nuestros propios atributos => data-description=tiene que empezar con la palabra data y guion medio y la palabra que uno desee********************"
);
console.log(document.documentElement.lang);
/* Aparentemente el segundo metodo trae lo mismo que el primero pero no es asi y nos daremos cuenta
en los enlaces */
console.log(document.querySelector(".link-dom").href);
/* Buena practica usar este segundo */
console.log(document.querySelector(".link-dom").getAttribute("href"));
console.log(document.documentElement.getAttribute("lang"));
/* Reasinar un valor nuevo al atributo de alguna etiqueta se cambio de EN a ES */
document.documentElement.lang = "es";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang", "es-BO");
/* Ahora empezamos a guardar en variables todo lo que obtenemos se puede usar CONST o LET 
Es buena practica usar const para usar con Array y Objetos se guardan en CONST por que no 
cambia el valor si no las referencias es decir siempre sera un objeto o un arreglo lo que cambia son las 
referencias dentro de ese tipo de Array POr que no importa si se usa LET O CONST por que al final igual sera
la misma e igual para una VARIABLE la mayoria de los desarrolladores usa el signo del  => $ para saber si se
esta usando en el HTML o hacen referencia a elementos de HTML o caso contrario que no tenga el dolar es parte
de la logica que se esta trabajando con JS para que sea dinamico y se puede decir que es buena practica usar
el signo del dolar donde almacenes elementos del DOM*/
const $linkDom = document.querySelector(".link-dom");
$linkDom.setAttribute("target", "_blank");

/* Para evitar abrir una nueva pestaña con peligro de ser robado la informacion se usa esto y asi no habra 
dependencia de la pagina actual y la nueva pagina a abrir*/
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://youtube.com");
/* Quitar atributos */
console.log($linkDom.hasAttribute("rel"));
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));
/* DATA-ATTRIBUTES y un MAPA es igual a un OBJETO EN JS se implemento en 2015*/
console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
/* Modificar el dataAttribute */
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description = "Suscribete A mi Canal";
console.log($linkDom.dataset.description);
/* Validar si tiene el atributo */
console.log($linkDom.hasAttribute("data-id"), "Significa que si tiene");
console.log($linkDom.removeAttribute("data-id"));
console.log($linkDom.hasAttribute("data-id"), "Significa que no tiene");
console.log(
  "*************** class 64 Estilos y Variables CSS ********************"
);
console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
/* otra forma de ver los estilos pero esta no es muy convensional pero aqui muestra los valores por defecto
de los elementos */
console.log(window.getComputedStyle($linkDom));
console.log(window.getComputedStyle($linkDom).getPropertyValue("color"));
$linkDom.style.setProperty("text-decoration", "none");
$linkDom.style.setProperty("display", "block");
$linkDom.style.width = "50%";
$linkDom.style.textAlign = "center";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = "1.5rem";
console.log($linkDom.style);
console.log(
  $linkDom.getAttribute("style"),
  "Me muestra todos los estilos que le di por JS"
);
console.log(window.getComputedStyle($linkDom));
/* Variables CSS custom properties */
const $html = document.documentElement,
  $body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);
$body.style.background = varDarkColor;
$body.style.color = varYellowColor;
/* Para modificar el color pero no paso nada si establece el valor pero nunca se aplica
pero no es lo que buscamos por que el valor de la propiedad se aplica como propiedad 
y no lo cambia a la variable el valor */
$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
console.log(varDarkColor);
$body.style.setProperty("background", varDarkColor);
console.log("*************** class 65 Clases CSS ********************");
const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
/* Hay un metodo dinamico que evalua si tiene la clase y lo añade si no tiene y si tiene
lo quita esto se lo usa mucho en el modo DARK y LIGTH en los proyectos */
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");
/* esto nos sirve para reemplazar una clase por otra clase pero lo hace de uno en uno */
$card.classList.replace("rotate-45", "rotate-135");
/* Si se tiene la necesidad de quitar o añadir varias clases al mismo tiempo de hace lo siguiente */
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.add("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
console.log(
  "*************** class 66 Texto y HTML contenido de las etiquetas ********************"
);
const $whatIsDom = document.getElementById("que-es");
console.log($whatIsDom);
let text = `<p>hello(<b><i>Mundo</i></b>)es una API</p>
<p>Soy un parrafo</p> 
<p>Sere insertado desde un JS</p>`;
/* Esta primera fue creado para internet explorer pero no es muy usado y no reconoce las etiquetas
HTML si no que las pone como texto y cada identacion lo mantiene con br*/
$whatIsDom.innerText = text;
/* Esta si se usa y es parte del manejo del estandar aqui se mantiene igual como texto pero
ya no respeto la identacion y no pone br y se usa cuando se necesita añadir solo texto */
$whatIsDom.textContent = text;
/* Para solucionar eso se usa lo siguiente y funciona todo bien como HTML y esto se usa 
solo cuando se necesite agregar etiquetas HTML */
$whatIsDom.innerHTML = text;
/* Hay otra propiedad que es outerHTML que se maneja con la idea de React que solo puede estar envuelto
por un contenedor caso contrario usar <></> y esto es buena practica para HTML */
$whatIsDom.outerHTML = text;
console.log(
  "*************** class 67 DOM traversing: Recorriendo el DOM ********************"
);
/* Todo los metodos son para elementos = Etiquetas */
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.childNodes, "Soy ====>");
console.log($cards.children[2]);
/* Para que retorne el elemento padre se usa lo siguiente */
console.log($cards.parentElement);
console.log($cards.parentNode);
/* Este de abajo toma el salto de linea como primer nodo cosa que no accede al elemento */
console.log($cards.firstChild);
console.log($cards.lastChild);
/* Este si accede directo al elemento y no al nodo como al de arriba */
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
/* Ahora identificamos los hermanos uno anterior y uno despues */
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextSibling);
console.log($cards.nextElementSibling);
/* Nuevo metodo que busca el ancestro es decir el padre mas cercano */
console.log($cards.closest("div"));
console.log($cards.children[3].closest("section"));
console.log(
  "*************** class 68 Creando elementos y fragmentos ********************"
);
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cardss = document.querySelector(".cards");
$figure.appendChild();
$cardss.appendChild($figure);
