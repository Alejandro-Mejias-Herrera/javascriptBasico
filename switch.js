var eleccionJugador = "Papel";
var eleccionMaquina = "Tijeras";

function jugar (eleccionJugador,eleccionMaquina) {

    switch (true) {
        case eleccionJugador === "Piedra" && eleccionMaquina === "Tijeras" || eleccionJugador === "Papel" &&   eleccionMaquina === "Piedra" || eleccionJugador === "Tijeras" && eleccionMaquina === "Papel":
            console.log("¡Felicidades, ganaste!");
            break;

        case eleccionJugador === eleccionMaquina:
            console.log("Es un empate.");
            break;

        default: 
            console.log("Lo lamento, perdiste.");
}
}

jugar(eleccionJugador,eleccionMaquina);