console.log("Sesion #12 Objetos JS");
/* Objetos son muy importantes en JS 
y se dicen que en JS todo es un Objeto*/
let a = new String("Hola soy un objeto string");
console.log(a);
/* se puede usar let o const en variables, metodos, array, y objetos */
const object1 = {
  nombre: "kevin",
};
console.log(typeof object1, object1);
/* tambien se puede crear objetos con el prototipo Object() pero no es muy recomendado*/
const obj = new Object(1);
console.log(obj);
/* Objeto kevin */
const kevin = {
  nombre: "kevin",
  apellido: "Mollo",
  edad: 22,
  /* Se puede meter arrays a un objeto */
  pasatiempos: ["Aprender", "prácticar", "pasar clases extras"],
  soltero: true,
  /* Se puede meter objetos dentro de objetos como contacto */
  contacto: {
    email: "keevj1999@gmail.com",
    facebook: "Kevin Jhonatan",
    movil: 72700606,
  },
  /* Se puede meter metodos a un objeto */
  saludar: function () {
    console.log("Soy un metodo dentro de un objeto");
  },
  /* Tambien se puede definir el metodo con arrow function de esta forma*/
  saludar2() {
    console.log("Soy un metodo dentro de un objeto pero yo soy arrow function");
  },
  decirMiNombre: function () {
    console.log(
      /* this hace referencia a los atributos dentro del objeto */
      `Hola me llamo ${this.nombre}, ${this.apellido}, ${this.contacto.email}, me gusta ${this.pasatiempos[2]}`
    );
  },
};
console.log(kevin);
/* Aqui invocamos a la arrow function */
kevin.saludar2();
console.log();
/* llamar a elementos del objeto como si fuese array pero la forma mas aceptada es usando el punto*/
console.log(kevin["nombre"]);
console.log(kevin["apellido"]);
console.log(kevin["edad"]);
console.log(kevin["contacto"]);
console.log(kevin["pasatiempos"]);
console.log(kevin["saludar"]);
console.log(kevin["saludar2"]);
/* Tambien accedemos con el punto y es mas recomendables */
console.log(kevin.nombre);
/* Los objetos dentro de un objeto a las variables se llamaran atribudos y a las funciones se
llamaran metodos por tener un objeto */
console.log(kevin.apellido);
console.log(kevin.edad, "años");
console.log(kevin.soltero);
console.log(kevin.contacto.email);
console.log(kevin.pasatiempos[2]);
kevin.saludar();
kevin.saludar2();
kevin.decirMiNombre();
/* Uso de metodos importantes en este caso keys que nos lista el contenido del objeto*/
console.log(Object.keys(kevin));
/*  */
console.log(Object.values(kevin));
/* Busca si en todo el objeto existe el atributo nombre */
console.log(kevin.hasOwnProperty("nombre"));
/* Evaluar si existe en alguna de las llaves nacimiento */
console.log(kevin.hasOwnProperty("nacimiento"));
console.log("***************************************************");
