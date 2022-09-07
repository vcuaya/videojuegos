class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: "Bootloader"                                   // Nombre interno o clave de referencia
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

        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        console.log(keyCodes);

        // this.teclaA = this.input.keyboard.addKey(keyCodes.A);

        // Investigar que es un arrow function
        // this.teclaA.on('down', () => {
        //     console.log('Has presionado la tecla A');
        // }
        // );

        // this.teclaA.on('up', () => {
        //     console.log('Has soltado la tecla A');
        // }
        // );

        // Conjunto de teclas
        // Objeto JSON
        // this.teclas = this.input.keyboard.addKeys({
        //     arriba: keyCodes.UP,
        //     abajo: keyCodes.DOWN,
        //     s: keyCodes.S
        // });

        // this.teclas.arriba.on('down', () => {
        //     console.log("You press the UP key");
        // });

        // this.teclas.abajo.on('down', () => {
        //     console.log('You press the DOWN key');
        // });

        // this.teclas.s.on('down', () => {
        //     console.log('You press the S key');
        // });

        // this.teclas = this.input.keyboard.addKeys('up, down, s');

        // this.teclas.up.on('down', () => {
        //     console.log("You press the UP key");
        // });

        // this.teclas.down.on('down', () => {
        //     console.log('You press the DOWN key');
        // });

        // this.teclas.s.on('down', () => {
        //     console.log('You press the S key');
        // });

        // Cursores
        // this.cursor = this.input.keyboard.createCursorKeys();
        // console.log(this.cursor);

        // this.cursor.left.on('down', () => {
        //     console.log('Has presionado la tecla IZQUIERDA');
        // });

        // this.combo = this.input.keyboard.createCombo([
        //     keyCodes.DOWN, keyCodes.RIGHT
        // ]);

        this.input.keyboard.on('keycombomatch', () => {
            console.log('El combo se ha ejecutado');
        });

        this.combo = this.input.keyboard.createCombo(
            [keyCodes.DOWN, keyCodes.RIGHT],
            { resetOnMatch: true }
        );

    }

    update(time, delta) {
        // Esta función crea un ciclo infinito
        // Definición de Phaser
        // time: Es la hora actual. Es un valor del temporizador de alta resolución si proviene de una solicitud del cuadro de animación o Date.now si se usa SetTimeout
        // delta: Es el tiempo en milisegundos desde el último frame. Este es un valor suavisado y limitado basado en la tasa de frames por segundo

        // Mientras se cumpla el evento lo mostrará al estar
        // dentro de un ciclo se mostrará infinitas veces
        // if(this.teclaA.isDown){
        //     console.log('You press the A key')
        // }

        // if(this.teclaA.isUp){
        //     console.log('You release the A key')
        // }

        // Captura un solo evento
        // if (Phaser.Input.Keyboard.JustDown(this.teclaA)) {
        //     console.log('You press the A key')
        // }

        // if (Phaser.Input.Keyboard.JustUp(this.teclaA)) {
        //     console.log('You release the A key')
        // }

        // 
        // if (this.teclas.arriba.isDown) {
        //     console.log('You press the UP key');
        // }
        // if (this.teclas.abajo.isDown) {
        //     console.log('You press the DOWN key');
        // }
        // if (this.teclas.s.isDown) {
        //     console.log('You press the S key');
        // }

        // 
        // if (this.teclas.up.isDown) {
        //     console.log('You press the UP key');
        // }
        // if (this.teclas.down.isDown) {
        //     console.log('You press the DOWN key');
        // }
        // if (this.teclas.s.isDown) {
        //     console.log('You press the S key');
        // }

        // Evento keydown
        // this.input.keyboard.on('keydown', (evento) => {
        //     // se muestra todo el evento
        //     console.log('Se ha presionado la tecla: ', evento);
        // });

        // Propiedades code o key
        // this.input.keyboard.on('keydown', (evento) => {
        //     // se detecta exactamente la 'e' minúscula
        //     if (evento.key === 'e')
        //         console.log('Se ha presionado la tecla e');
        // });

        // if (this.cursor.left.isDown) {
        //     console.log('Has presionado la tecla IZQUIERDA');
        // }

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