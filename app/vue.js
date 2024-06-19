new Vue({
    el: '#app',
    data: {
        mensaje: 'Presiona una flecha'
    },
    mounted() {
        document.addEventListener('keydown', this.handleKeyDown);
    },
    methods: {
        handleKeyDown(event) {
            switch (event.keyCode) {
                case 37: 
                    this.mensaje = 'Presionaste la flecha izquierda';
                    break;
                case 38: 
                    this.mensaje = 'Presionaste la flecha arriba';
                    break;
                case 39: 
                    this.mensaje = 'Presionaste la flecha derecha';
                    break;
                case 40: 
                    this.mensaje = 'Presionaste la flecha abajo';
                    break;
                default:
               
                    break;
            }
        }
    }
});