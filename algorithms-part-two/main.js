/* Algoritmos complementarios. Parte II */

/* Ejercicio 1. Yo no fui */  

let nombre = prompt("Bienvenido. Ingrese su nombre por favor");
const BART = "Bart";
if(nombre === BART){
    alert(`Fui yo`);
} else {
    alert(`Yo no fui`);
}

/* Ejercicio 2. Presionar Y */  

let tecla = prompt("Bienvenido. Ingrese presione una tecla y luego presione enter");
if(tecla === "y" || tecla.toUpperCase() === "Y"){
    alert(`Correcto`);
} else {
    alert(`Error`);
}

/* Ejercicio 3. Elegir personaje */  

let numeroPersonaje = parseInt(prompt("Bienvenido. Ingrese un numero y se le asignara un personaje")); 
if((numeroPersonaje >= 1) && (numeroPersonaje <= 4)){
    if(numeroPersonaje === 1){
        alert(`Elegiste a Homero`);
    } else if(numeroPersonaje === 2){
        alert(`Elegiste a Marge`);
    } else if(numeroPersonaje === 3){
        alert(`Elegiste a Bart`);
    } else {
        alert(`Elegiste a Lisa`);
    }
} else {
    alert(`Personaje desconocido`);
}

/* Ejercicio 4. Presupuesto */ 

let valorPresupuesto = prompt("Bienvenido. Ingrese un numero y se le categorizara su presupuesto");
if(valorPresupuesto >= 0){
    if(valorPresupuesto <= 1000){
        alert(`Presupuesto bajo`);
    } else if(valorPresupuesto <= 3000){
        alert(`Presupuesto medio`);
    } else {
        alert(`Presupuesto alto`);
    }
} else {
    alert(`Error. No se pueden categorizar presupuestos con numeros negativos o con cadena de caracteres`);
}  

/* Ejercicio 5. Vacio */ 

let primerProducto = prompt("Bienvenido. Ingrese el primer producto de almacen");
let segundoProducto = prompt("Ahora, ingrese el segundo producto de almacen");
let tercerProducto = prompt("Ahora, ingrese el tercer producto de almacen");
let cuartoProducto = prompt("Por ultimo, ingrese el cuarto producto de almacen");
if(primerProducto === "" && segundoProducto != "" && tercerProducto != "" && cuartoProducto != ""){
    alert(`El primer producto no fue cargado. Recargue la pagina e intente nuevamente`);
} else if(primerProducto != "" && segundoProducto === "" && tercerProducto != "" && cuartoProducto != "") {
    alert(`El segundo producto no fue cargado. Recargue la pagina e intente nuevamente`);
} else if(primerProducto != "" && segundoProducto != "" && tercerProducto === "" && cuartoProducto != ""){
    alert(`El tercer producto no fue cargado. Recargue la pagina e intente nuevamente`);
} else if(primerProducto != "" && segundoProducto != "" && tercerProducto != "" && cuartoProducto === ""){
    alert(`El cuarto producto no fue cargado. Recargue la pagina e intente nuevamente`);
} else if(primerProducto != "" && segundoProducto != "" && tercerProducto != "" && cuartoProducto != "") {
    // Todos los productos cargados correctamente
    let productos = "Primer producto: " + primerProducto + " " + "Segundo producto: " + segundoProducto + " " + "Tercer producto: " + tercerProducto + " " + "Cuarto producto: " + cuartoProducto;
    alert(productos);
} else {
    // No se cargaron al menos dos productos
    alert(`No se cargaron al menos dos productos. Recargue la pagina e intente nuevamente`);
}
