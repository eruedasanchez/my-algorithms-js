/* Algoritmos complementarios. Parte VI */

/* Ejercicio 1. El equipo */

const equipo = ["Homero", "Apu", "Otto", "Moe"];
for(let i=0; i < equipo.length; i++){
    alert(`El jugador del equipo ubicado en la posicion ${i} es ${equipo[i]}`);
}

/* Ejercicio 2. Carga el equipo */

const team = [];
let nombreJugador = prompt("Ingrese el nombre de una persona para su equipo o escriba ESC si ya termino de formar su equipo");
while(nombreJugador != "ESC"){
    team.push(nombreJugador);
    nombreJugador = prompt("Ingrese el nombre de una persona para su equipo o escriba ESC si ya termino de formar su equipo");
}
// Impresion de los jugadores del equipo
for(let pos = 0; pos < team.length; pos++){
    alert(`El jugador del equipo ubicado en la posicion ${pos} es ${team[pos]}`);
}

/* Ejercicio 3. Carga el equipo */

class Jugador{
    constructor(nombre, camiseta, edad, lesionado){
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

const primerJugador = new Jugador("Messi", "10", "35", false);
const segundoJugador = new Jugador("Aguero", "19", "35", true);
const tercerJugador = new Jugador("Dibu Martinez", "1", "30", false);
const cuartoJugador = new Jugador("Lo Celso", "18", "28", true);
const quintoJugador = new Jugador("Julian", "9", "22", false);
const jugadoresSeleccion = [];
jugadoresSeleccion.push(primerJugador);
jugadoresSeleccion.push(segundoJugador);
jugadoresSeleccion.push(tercerJugador);
jugadoresSeleccion.push(cuartoJugador);
jugadoresSeleccion.push(quintoJugador);
console.log(jugadoresSeleccion);


/* Ejercicio 4. Buscar jugador */

const buscarJugador = (equipo, jugador) => {
    const encontre =  equipo.find(player => player.nombre === jugador);
    return encontre;
} 

// Busqueda del jugador
alert(`Bienvenido. Vamos a buscar tres (3) jugadores en el equipo`);
for(let j=0; j < 3; j++){
    let jug = prompt("Ingrese el nombre del jugador que quiere saber si es parte del equipo");
    if(buscarJugador(jugadoresSeleccion, jug)){
        alert(`${jug} es parte de la seleccion nacional. Ademas, ${jug} usa la camiseta numero ${buscarJugador(jugadoresSeleccion, jug).camiseta} y tiene ${buscarJugador(jugadoresSeleccion, jug).edad} años.`);
    } else {
        alert(`${jug} no ha sido convocado a ser parte de la seleccion nacional aun.`);
    }
}

/* Ejercicio 5. Filtrar jugadores */

const filtroJugadores = (equipo, edad) => {
    const encontrados = equipo.filter(futbolista => futbolista.edad === edad);
    return encontrados;
}

// Filtrado de jugadores
alert(`Bienvenido. Vamos a buscar cinco (5) jugadores por edad en el equipo`);
for(let b=0; b < 5; b++){
    let age = prompt("Ingrese la edad del jugador que quiere filtrar");
    const jugadoresSegunEdad = filtroJugadores(jugadoresSeleccion, age);
    if(jugadoresSegunEdad.length != 0){
        jugadoresSegunEdad.forEach((futbolista) => {
            let informacionJugador = `Nombre: ${futbolista.nombre}, Edad: ${futbolista.edad}, Camiseta: ${futbolista.camiseta}, Esta lesionado?: ${futbolista.lesionado}`;
            alert(informacionJugador);
        });
        alert(`Esos son todos los jugadores de ${age} años en la seleccion argentina. Por favor, presione enter para continuar.`);
    } else {
        alert(`No hay jugadores en la seleccion argentina de ${age} años. Por favor, ingrese otra edad.`);
    }
}







