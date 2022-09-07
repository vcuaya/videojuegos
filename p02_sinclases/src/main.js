const config = {
    title: "Curso Phaser",
    url: "http://google.es",
    version: "0.0.1",
    width: 640,
    height: 360,
    parent: "contenedor",
    pixelArt: true,
    backgroundColor: "#34495e",
    scene: {        // Configuración de la escena
        init,       // Para inicializar y cargar datos
        preload,    // Para precargar archivos
        create,     // Para cargar los objetos
        update      // Bucle del juego
    },
    banner: {
        hidePhaser: true,
        text: "#fff00f",
        background: [
            "#16a085",
            "#2ecc71",
            "#e74c3c",
            "#000000"
        ]
    }
};

function init() {
    console.log("Soy init");
}

function preload() {
    console.log("Soy preload");
}

function create() {
    console.log("Soy create");
}

function update(time, delta){
    // Esta función crea un ciclo infinito
    // time: es el tiempo de ejecución actual del juego
    // delta: es un valor de tiempo de ejecución más preciso

    // Definición de Phaser
    // time: Es la hora actual. Es un valor del temporizador de alta resolución si proviene de una solicitud del cuadro de animación o Date.now si se usa SetTimeout
    // delta: Es el tiempo en milisegundos desde el último frame. Este es un valor suavisado y limitado basado en la tasa de frames por segundo
    console.log(time);
    console.log(delta);
}

const game = new Phaser.Game(config);
