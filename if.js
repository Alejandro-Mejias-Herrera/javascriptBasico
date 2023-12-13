// Un operador ternario que hace lo de un if es el siguiente:
// condition ? true : false.

var resultado = número === 1 ? "Sí soy uno" : "No, no soy uno";

//PIEDRA, PAPEL O TIJERAS.

//Variables.
var eleccionJugador = "Papel";
var eleccionMaquina = "Piedra";

//Función.
function juego () {
    if (eleccionJugador === "Piedra" && eleccionMaquina === "Tijeras" || eleccionJugador === "Papel" && eleccionMaquina === "Piedra" || eleccionJugador === "Tijeras" && eleccionMaquina === "Papel") {
        console.log("Felicidades, ganaste");
    } else if (eleccionJugador === eleccionMaquina) {
        console.log("Empate.")
    } else {
        console.log("Lo lamento, perdiste");
    }
}