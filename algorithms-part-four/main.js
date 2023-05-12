/* Algoritmos complementarios. Parte IV */

/* Ejercicio 1. Entradas y salidas */

const entrada = () => {
    let val = prompt("Bienvenido. Ingrese un valor por favor");
    return val;
}

const procesamiento = val => {
    return val * val;
}

const salida = val => {
    alert(`El valor del resultado es igual a ${val}`);
}

let value = entrada();
value = procesamiento(value);
salida(value);


/* Ejercicio 2. Entradas y salidas */

const redondeo = num => {
    return Math.round(num);
}

let numero = 0;
let numeroRedondeado = 0;
for(let i = 0; i < 5; i++){
    numero = parseFloat(prompt("Ingrese el numero que quiere redondear"));
    numeroRedondeado = redondeo(numero);
    alert(`El numero ${numero} redondeado pasa a tener un valor de ${numeroRedondeado}`);
}

/* Ejercicio 3. Impuestos */ 

const impuesto = (precio, porcentaje) => {
    let recargo = (precio * porcentaje) / 100;
    return precio + recargo;
}

let precio = 0;
let porcentaje = 0;
let precioFinal = 0;
for(let i = 0; i < 5; i++){
    precio = parseFloat(prompt("Ingrese el precio de un producto"));
    porcentaje = parseInt(prompt("Ahora, ingrese un porcentaje"));
    precioFinal = impuesto(precio,porcentaje);
    alert(`El precio original del producto elegido era de $${precio}. Ahora, con un impuesto del ${porcentaje}%, tiene un valor final de $${precioFinal}`);
}


/* Ejercicio 4. Cotizacion */ 

const cotizarDolar = (pesos) => {
    let dolares = pesos / 470;
    return  dolares;
}

const cotizarPesos = (dolar) => {
    let pesosArgentinos = dolar * 465;
    return pesosArgentinos;
}

alert(`Bienvenidos al cotizador de monedas mas basico del universo. Presione enter para continuar`);
let cotizacion;
let moneda = prompt("Ingrese la moneda que tiene en su poder");
let valor = parseInt(prompt('Ahora, ingrese el valor en ' + moneda + ' que tiene en su poder'));
    switch(moneda){
            case "peso argentino":
                cotizacion = cotizarDolar(valor);
                alert(`Excelente. Usted tiene en su poder ${cotizacion}USD`);
                break;
            
            case "dolar":
                cotizacion = cotizarPesos(valor);
                alert(`Excelente. Usted tiene en su poder $${cotizacion} argentinos`);
                break;
            
            default:
                alert(`Ops! La moneda ingresada esta fuera de mi alcance`);
                break;
    }

/* Ejercicio 5. Validacion */

const validacion = (cadena) => {
    let res = true;
    if(cadena === ""){
        res = false;
    }
    return res;
}

alert(`Bienvenido al mejor validador de cadenas del mundo. Presione enter para continuar`);
let entry = prompt("Ingrese una cadena a validar o ESC si no quiere validar mas cadenas");
let cadenaValidada;
while(entry != "ESC"){
    cadenaValidada = validacion(entry);
    if(cadenaValidada){
        alert(`Felicitaciones! Su cadena fue validada.`);
    } else {
        alert(`Lo siento. Su cadena no pudo ser validada.`);

    }
    entry = prompt("Ingrese una cadena a validar o ESC si no quiere validar mas cadenas");
}







