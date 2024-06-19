import Servicios from "./Servicios.js";

class GestionUsuarios {
    constructor() {
        this.init();
        this.servicios = new Servicios();
    }

    init() {
        this.render();
    }

    render() {
        this.renderLogin();
    }

    renderLogin() {
        const template = `
            <form id="login-form">
            <div class="titular"><h2 class=" titulo">Tetris UCH </h2><img class="nameimg"src="./app/src/imagen/uch.png"></div>
     <div class="datos">
        <div>
            <label for="username">Nombre de Usuario:</label>
            <input type="text" id="username" name="username" required autocomplete="off">
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required autocomplete="off">
        </div>
    </div>
        <button type="button" id="login-button">Iniciar Sesión</button>
    </form>`;
        $("#container").append(template);
        this.login();
    }

    login() {
        $("#login-button").click(() => {
            let name = $("#username").val();
            let password = $("#password").val();
            this.servicios.autenticar(name, password, (error, responseAutenticar) => {
                if (error) {

                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Error al ingresar!',
                    });
                    console.error(error);
                    errorMessage.css("display", "block");

                } else {
                    localStorage.setItem("userId", responseAutenticar.usuario.id);
                    console.log(responseAutenticar.usuario.id);

                    console.log(responseAutenticar);

                    Swal.fire({
                        title: '¡Bienvenido!',
                        text: 'Redirigiendo a Tetris...',
                        icon: 'success'
                    }).then(() => {
                        console.log(responseAutenticar.usuario.id);
                        window.location.href = "tetris.html";

                    });

                }

            });
        });

    }

    clearContainer() {
        $("#container").html("");
    }





}

export default GestionUsuarios;
