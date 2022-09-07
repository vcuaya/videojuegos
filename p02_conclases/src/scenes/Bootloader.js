class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: "Bootloader"   // Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("Soy init");
    }

    preload() {
        this.load.path = "./assets/";           // Ruta de todas las imágenes
        this.load.image("yoshi", "yoshi.png");  // Alias y archivo
        this.load.image("yoshi_fondo");         // Sin nombre de archivo, se toma por defecto el nombre del archivo como alias
        //Arreglo de imágenes
        //this.load.image(["yoshi_fondo", "yoshi"]);
    }

    create() {
        this.yoshi = this.add.image(130, 130, "yoshi");         // Atributo
        this.yoshif = this.add.image(100, 100, "yoshi_fondo");  // Atributo

        // Horizontalmente al centro y verticalmente arriba
        this.yoshi.setOrigin(0.5, 0);

        // Horizontalmente a la izquierda y verticalmente abajo
        this.yoshif.setOrigin(0, 1);

        this.yoshi.flipX = true;
        this.yoshif.flipY = true;

        this.yoshi.setVisible(true);
        this.yoshif.setVisible(true);

        this.yoshi.setScale(3, 3);
        this.yoshif.setScale(3, 3);

        this.yoshi.setAlpha(0.5);
        this.yoshif.setAlpha(1);

        this.yoshi.setTint(0x123456);
        this.yoshif.setTint(0x654321);

        this.yoshi.x = 200;
        this.yoshi.y = 150;

        this.yoshif.x = 200;
        this.yoshif.y = 240;

        this.yoshi.angle = 45;
        this.yoshi.rotation = 125;
        this.yoshi.setDepth(1);

        console.log(this.yoshi);

        // Prueba final sección 3
        this.yoshi = this.add.image(640, 360, "yoshi");
        this.yoshi.setOrigin(1);
        this.yoshif = this.add.image(0, 0, "yoshi_fondo");
        this.yoshif.setOrigin(0);
    }

    update(time, delta) {
        // Esta función crea un ciclo infinito
        // time: es el tiempo de ejecución actual del juego
        // delta: es un valor de tiempo de ejecución más preciso

        // Definición de Phaser
        // time: Es la hora actual. Es un valor del temporizador de alta resolución si proviene de una solicitud del cuadro de animación o Date.now si se usa SetTimeout
        // delta: Es el tiempo en milisegundos desde el último frame. Este es un valor suavisado y limitado basado en la tasa de frames por segundo

        // Control de giro
        if (this.yoshif.x == 0)
            this.yoshif.flipX = false;
        if (this.yoshif.x == 550)
            this.yoshif.flipX = true;

        // Control de avance
        if (this.yoshif.flipX == 0)
            this.yoshif.x += 5;
        if (this.yoshif.flipX == 1)
            this.yoshif.x -= 5;

        // Control de giro
        if (this.yoshi.x == 640)
            this.yoshi.flipX = 1;
        if (this.yoshi.x == 90)
            this.yoshi.flipX = 0;

        // Control de avance
        if (this.yoshi.flipX == false)
            this.yoshi.x += 5;
        if (this.yoshi.flipX == true)
            this.yoshi.x -= 5;
    }
}

export default Bootloader;