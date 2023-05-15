/* Algoritmos complementarios. Parte V */

/* Ejercicio 1. La tienda */

/*
class Tienda{
    constructor(nombre, direccion, propietario, rubro){
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
    }
}

const primerTienda = new Tienda("Jumbo", "Pedro Goyena 600", "Cencosud", "Comestibles");
const segundaTienda = new Tienda("Solo deportes", "Avenida Acoyte 250", "Argentina", "Deportes");
const tercerTienda = new Tienda("Puppies", "Avenida Rivadavia 5600", "Eukanuba", "Alimento para mascotas");
console.log(primerTienda);
console.log(segundaTienda);
console.log(tercerTienda);
*/

/* Ejercicio 2. Registro de tiendas */

/*
class Tienda{
    constructor(nombre, direccion, propietario, rubro){
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
    }
}

alert(`Bienvenido! Vamos a registrar cinco (5) tiendas. Presione enter para continuar`);
let nombre;
let direccion;
let propietario;
let rubro;
const tiendas = [];
for(let numeroTienda = 0; numeroTienda < 5; numeroTienda++){
    nombre = prompt('Ingrese el nombre de la tienda ' + (numeroTienda + 1));
    direccion = prompt('Ingrese la direccion de la tienda ' + (numeroTienda + 1));
    propietario = prompt('Ingrese el propietario de la tienda ' + (numeroTienda + 1));
    rubro = prompt('Ingrese el rubro de la tienda ' + (numeroTienda + 1));
    const negocio = new Tienda(nombre, direccion, propietario, rubro);
    tiendas.push(negocio);
}
alert(JSON.stringify(tiendas, null, 6));
*/

/* Ejercicio 3. Abierto y cerrado */

/* 
class Negocio{
    constructor(nombre, direccion, propietario, rubro){
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
    }
    estaAbierto(hora){
        if((hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19)){
            return true;
        } else {
            return false;
        }
    }
}

let nombre = prompt("Ingrese el nombre de la tienda");
let direccion = prompt("Ingrese la direccion de la tienda");
let propietario = prompt("Ingrese el propietario de la tienda");
let rubro = prompt("Ingrese el rubro de la tienda");
let hora;
const negocio = new Negocio(nombre, direccion, propietario, rubro);
alert(JSON.stringify(negocio, null, 1));
alert(`Ahora, le vamos a solicitar sus tres (3) horarios preferidos para hacer las compras y le responderemos si estamos abiertos en ese horario.`);
for(let i = 0; i < 3; i++){
    hora = parseInt(prompt('Ingrese su horario preferido numero ' + (i + 1)));
    if(negocio.estaAbierto(hora)){
        alert(`Excelente! En ese horario nos encontramos abiertos. Lo esperamos`);
    } else {
        alert(`Ops! En ese horario estamos cerrados. Por favor, ingresa otro horario.`);
    }
}
*/

/* Ejercicio 4. Validar propietario */

/*
class Tienda{
    constructor(nombre, direccion, propietario, rubro){
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
    }
    esPropietario(name){
        return name === this.propietario;
    }
}

alert(`Bienvenido! Vamos a registrar tres (3) tiendas. Presione enter para continuar`);
let nombre;
let direccion;
let propietario;
let rubro;
const tiendas = [];
for(let numeroTienda = 0; numeroTienda < 3; numeroTienda++){
    nombre = prompt('Ingrese el nombre de la tienda ' + (numeroTienda + 1));
    direccion = prompt('Ingrese la direccion de la tienda ' + (numeroTienda + 1));
    propietario = prompt('Ingrese el propietario de la tienda ' + (numeroTienda + 1));
    rubro = prompt('Ingrese el rubro de la tienda ' + (numeroTienda + 1));
    const negocio = new Tienda(nombre, direccion, propietario, rubro);
    tiendas.push(negocio);
}
alert(JSON.stringify(tiendas, null, 4)); // Las 3 tiendas se encuentran inicializadas 

// Nombres pertenecen a tienda? 
alert(`Ahora, va a ingresar cinco (5) nombres y se va a verificar si alguno es propietario de alguna tienda`);
for(let i = 0; i < 5; i++){
    let nombrePropietario = prompt('Ingrese el nombre del propietario numero ' + (i+1));
    for(let j = 0; j < tiendas.length; j++){
        if(tiendas[j].esPropietario(nombrePropietario)){
            alert(`Excelente. La tienda ${tiendas[j].nombre} es propiedad de ${nombrePropietario}`);
            break;
        } else if(j === tiendas.length - 1){
            // No encontro propietario
            alert(`El nombre ingresado no coincide con ningun propietario de tienda. Presione enter para continuar.`);
        }
    }
}
*/

/* Ejercicio 5. El cliente */

class Cliente{
    constructor(nombre, presupuesto, telefono, tarjDescuento){
    this.nombre = nombre;
    this.presupuesto = presupuesto;
    this.telefono =  telefono;
    this.tarjDescuento = false;
    }
    transferirDinero(valor){
        if((valor > 0) && (this.presupuesto - valor >= 0)){
            this.presupuesto = this.presupuesto - valor;
            return true;
        } else {
            // No se puede transferir
            return false; 
        }
    }
}

const primerCliente = new Cliente("Enzo Fernandez", 50000 , "1161644212", false);
const segundoCliente = new Cliente("Julian Alvarez", 100000, "1166419832", false);
const tercerCliente = new Cliente("Lionel Messi", 2000000, "1141973532", false);
const clientes = [];
clientes.push(primerCliente);
clientes.push(segundoCliente);
clientes.push(tercerCliente);
// Chequear si cada cliente puede transferir el monto ingresado
alert(`Bienvenido. Le vamos a solicitar cinco (5) valores de presupuesto para ver si algun cliente puede transferir el monto solicitado`);
for(let i = 0; i < 5; i++){
    let valor = parseInt(prompt('Ingrese el valor numero ' + (i+1) + ' a transferir'));
    for(let c = 0; c < clientes.length; c++){
        if(clientes[c].transferirDinero(valor)){
            alert(`El cliente ${clientes[c].nombre} puede realizar una transferencia de $${valor}.`);
        } else {
            alert(`El cliente ${clientes[c].nombre} no tiene fondos suficientes para realizar una transferencia de $${valor}`);
        }
    }
}


