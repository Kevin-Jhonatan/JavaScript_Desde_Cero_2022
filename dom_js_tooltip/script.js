/* nos ayuda a acceder a todo nuestro documento HTML */
console.log(window.document);
/* Te muestra información acerca del HTMl como en que servidor esta corriendo */
console.log(document);
/* Muestra el encabezado */
console.log(document.head);
/*  */
console.log(document.body);
/*  */
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
/*  */
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
/* este motodo nos ayuda a mostrar algo en un cierto tiempo determinado en milisegundos */
setTimeout(() => {
  console.log(document.getSelection().toString());
  console.log("Estoy aqui adentro");
}, 2000);
let nombre = "Kevin";
document.write(`<h2>Hola Mundo desde el DOM soy ${nombre}</h2>`);
/* Ya tengo la etiqueta h2 hasta aqui con el document write */
// elemento donde vamos a incorporar los <li>
const lista = document.getElementById("lista-dinamica");

// Creamos el <li>
const li = document.createElement("li");

// Agregamos texto al <li>
li.textContent = "Mi <li> dinámico";
li.style.color = "red";

// Finalmente incorporamos al <ul>
lista.appendChild(li);

/* Platzi */
document.getElementById;
parent.getElementByTagName;
parent.getElementByClassName;
/* Otras formas de usar */
parentElement.querySelector();
parentElement.querySelectorAll();
/* Es selector de un solo elemento es decir el primer elemento que encuentre */
document.querySelector("#id");
