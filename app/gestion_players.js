
let score_player_actual = 0;
let jugadoresSobrepasados = {}; 
let players = [
    { id: 1, name: "angelo", score: 70 },
    { id: 2, name: "miguel", score: 40},
    { id: 3, name: "marcial", score: 30 },
    { id: 4, name: "cristhian", score: 20 }
];
const displayPlayers = (score_player_actual, color) => {
    
    let userId = localStorage.getItem("userId");

    // Buscamos nuestro jugador actual
    let player_actual = buscarPlayer(userId);

    let playersElement = document.getElementById("players");
    playersElement.innerHTML = "";

    // Actualizamos el puntaje del jugador actual
    if (player_actual) {
        player_actual.score = score_player_actual;
    }

    // Ordenamos los jugadores por puntaje de forma descendente
    players.sort((a, b) => b.score - a.score);

    // Mostramos los jugadores en la página después de que se ha cambiado el puntaje del jugador actual y se ha ordenado la lista
    players.forEach(player => {
        let playerDiv = document.createElement("div");
        playerDiv.textContent = `${player.name}: ${player.score}`;
        if (player.id == userId) {
            playerDiv.style.color = color;
        }
        playersElement.appendChild(playerDiv);

        // Si encontramos al jugador que ha sido sobrepasado y no ha sido anunciado antes
        if (player.id != userId && player.score < score_player_actual && !jugadoresSobrepasados[player.id]) {
            jugadoresSobrepasados[player.id] = true; // Marcamos al jugador como anunciado
            decir(`Has sobrepasado a ${player.name}`);
        }
    });
}

// Función para buscar un jugador por su id
function buscarPlayer(idParam) {
    return players.find(player => player.id == idParam);
}

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

// Llamar a la función para mostrar los jugadores al inicio
displayPlayers(score_player_actual, 'blue');
