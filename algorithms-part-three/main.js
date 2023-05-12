/* Algoritmos complementarios. Parte III */

/* Ejercicio 1. El pizarron 

let texto = prompt("Bienvenido. Ingrese un texto por favor");
let repeticiones = prompt("Ahora, ingrese la cantidad de veces que quiere repetirlo");
for(let numeroRepeticion = 0; numeroRepeticion < repeticiones; numeroRepeticion++){
    alert(`${texto}. Repeticion numero ${numeroRepeticion + 1}`);
}
*/

/* Ejercicio 2. El cuadrado ordinario 

const minimo = (a,b) => {
    if(a < b){
        return a;
    } else {
        return b;
    }
} 

let numero = prompt("Bienvenido. Ingrese un numero por favor");
for(let lado = 0; lado < minimo(4,numero); lado++){
    alert(`Lado ${lado + 1}`);
}
*/

/* Ejercicio 3. Registro de alumnos 

alert(`Bienvenido al registro de alumnos! Presione enter para continuar`);
let alumnos = "";
for(let alumno = 0; alumno < 10; alumno++){
    let nombre = prompt('Ingrese el nombre del alumno ' + (alumno + 1) + '.');
    alumnos = alumnos + " " + nombre;
}
alert(`Lista de alumnos: ${alumnos}`);
*/

/* Ejercicio 4. El innombrable 

alert(`Bienvenido. Va a ingresar nombres hasta que adivine el nombre del innombrable`);
let nombre = "";
let nombres = "";
do{
    nombre = prompt("Ingrese algun nombre");
    if(nombre === "Voldemort"){
        alert(`Lista de nombres hasta el innombrable: ${nombres}`);
    } else {
        nombres = nombres + " " + nombre;
    }
} while(nombre != "Voldemort"){}
*/

/* Ejercicio 5. Comprando productos */ 

alert(`Bienvenido. Vamos a agregar productos hasta que usted lo desee`);
let entrada = prompt("Ingrese el numero y se lo asociaremos a algun producto");
let productos = "";
while(entrada != "ESC"){
    switch(entrada){
            case "1":
                productos = productos + " " + "Tomate";
                break;
            
            case "2":
                productos = productos + " " + "Papa";
                break;
            
            case "3":
                productos = productos + " " + "Carne";
                break;

            case "4":
                productos = productos + " " + "Pollo";
                break;
                
            default:
                break;
        }
        entrada = prompt("Ingrese un numero y se lo asociaremos a algun producto");
}
alert(`Compra finalizada. Usted ha elegido los siguiente productos: ${productos}`);
