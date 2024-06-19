// Definir arreglo de jugadores con contraseñas y IDs
let players = [
    { id: 1, name: "angelo", score: 70, password: "123" },
    { id: 2, name: "miguel", score: 40, password: "456" },
    { id: 3, name: "marcial", score: 30, password: "789" },
    { id: 4, name: "cristhian", score: 20, password: "987" }
];

$(document).ready(function() {
    $("#login-button").click(function(event) {
        let username = $("#username").val();
        let password = $("#password").val();
        let errorMessage = $("#error-message");

        // Comprobar si las credenciales coinciden con algún jugador
        let player = players.find(function(player) {
            return player.name === username && player.password === password;
        });

        if (player) {
            localStorage.setItem("userId", player.id);
        
            Swal.fire({
                title: '¡Bienvenido!',
                text: 'Redirigiendo a Tetris...',
                icon: 'success'
            }).then(() => {
                window.location.href = "tetris.html";
            });
        } else {
            errorMessage.css("display", "block");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error al ingresar!',
            });
        }
    });
});


// CAMBIO
function openModal(){
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
}
// CAMBIO
function closeModal(){
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
// CAMBIO
document.getElementById('restart-button').addEventListener('click', function() {
    location.reload();
  });

