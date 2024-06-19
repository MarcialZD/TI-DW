class Servicios {
    autenticar(name, password, callback) {
        const apiUrl = 'usarios.json';
        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: (response) => {
                const usuariosRegistrados = response.usuarios;
                const usuario = usuariosRegistrados.find(u => u.name== name && u.password == password);

                if (usuario) {
                    callback(null, {"status":response.status, "token": response.token ,"usuario":usuario});
                } else {
                    callback(new Error("Usuario o contraseña incorrectos."));
                }
            },
            error: (error) => {
                callback(error);
            }
        });
    }
    obtenerUsuarios(callback) {
        const apiUrl = 'usuarios.json';
        $.ajax({
            url: apiUrl,
            method: 'GET',
            success: (response) => {
                callback(null, response.usuarios);
            },
            error: (error) => {
                callback(error);
            }
        });
    }
    
}

export default Servicios;
