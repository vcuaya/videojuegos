import Bootloader from "./scenes/Bootloader.js";

const config = {
    title: "Curso Phaser",
    url: "http://google.es",
    version: "0.0.1",
    width: 640,
    height: 360,
    parent: "contenedor",
    pixelArt: true,
    backgroundColor: "#34495e",
    scene: [Bootloader],    // Aquí irá la lista de escenas del juego
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

const game = new Phaser.Game(config);