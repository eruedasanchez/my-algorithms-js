/* Algoritmos complementarios. Parte I */

/* Ejercicio 1. Homero */ 

let nombre = prompt("Bienvenido. Ingrese su nombre por favor"); 
let apellido = prompt("Excelente. Ahora, ingrese su apellido"); 
let edad = parseInt(prompt("Por ultimo, ingrese su edad"));
alert(`Hola ${nombre} ${apellido}. Su edad es ${edad}`);

/* Ejercicio 2. Ciudades */ 

const PRIMERACIUDAD = "Springfield";
const SEGUNDACIUDAD = "Miami";
const TERCERACIUDAD = "New York";
const CUARTACIUDAD = "Los Angeles";
const QUINTACIUDAD = "Minessotta";

alert(`El nombre de la primer ciudad es ${PRIMERACIUDAD}, el de la segunda es ${SEGUNDACIUDAD}, el de la tercera es ${TERCERACIUDAD}, el de la cuarta es ${CUARTACIUDAD} y el de la quinta es ${QUINTACIUDAD}`);


/* Ejercicio 3. Carnet */

let nombreConductor = prompt("Bienvenido. Vamos a generar su carnet de conductor. Ingrese su nombre por favor");
let apellidoConductor = prompt("Excelente. Ahora, ingrese su apellido");
let nacionalidad = prompt("Ingrese su pais de nacimiento");
let ciudad = prompt("Ingrese su ciudad actual de residencia");
let nombreCalle = prompt("Ingrese la direccion de su domicilio (solo nombre)");
let numeroCalle = parseInt(prompt("Ahora, el numero de su domicilio"));
let diaNacimiento = parseInt(prompt("Ingrese el dia de su nacimiento"));
let mesNacimiento = parseInt(prompt("Ingrese el mes de su nacimiento (01-12)"));
let anioNacimiento = parseInt(prompt("Ingrese el año de su nacimiento"));
alert(`Estamos generando su numero de licencia. Presione enter para continuar`);
let numeroLicencia = ((diaNacimiento * anioNacimiento) + mesNacimiento) % 79;
alert(`Felicitaciones. Su numero de licencia ha sido generado con exito. Presione enter para ver su carnet`);
let carnet = nombreConductor + " " + apellidoConductor + " " + nacionalidad + " " + ciudad + " " + nombreCalle + " " + numeroCalle + " " + diaNacimiento + " " + mesNacimiento + " " + anioNacimiento + " y el numero de su licencia de conducir es " + numeroLicencia;
alert(carnet);





