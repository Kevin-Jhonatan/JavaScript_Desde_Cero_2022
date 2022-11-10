console.log("Funciono Slider 3D");
const container = document.querySelector(".container");
const inputOne = document.createElement("input");
container.appendChild(inputOne);
inputOne.setAttribute("type", "radio");
inputOne.setAttribute("name", "slider");
inputOne.setAttribute("id", "item-1", "checked");
inputOne.setAttribute("checked", "");
/* Input 2 */
const inputTwo = document.createElement("input");
container.appendChild(inputTwo);
inputTwo.setAttribute("type", "radio");
inputTwo.setAttribute("name", "slider");
inputTwo.setAttribute("id", "item-2");
/* Input 3 */
const inputThree = document.createElement("input");
container.appendChild(inputThree);
inputThree.setAttribute("type", "radio");
inputThree.setAttribute("name", "slider");
inputThree.setAttribute("id", "item-3");
