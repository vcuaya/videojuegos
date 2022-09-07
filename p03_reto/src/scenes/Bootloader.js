class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            // Nombre interno o clave de referencia
            key: "Bootloader"
        });
    }

    init() {
        console.log("Soy init");
    }

    preload() {
        // Direcotorio de las imágenes
        this.load.path = "./assets/";

        // Arreglo de imágenes
        this.load.image(["blueCar", "redCar"]);
    }

    create() {
        /*
        =============================================
        Creación de elementos
        =============================================
        */
        // Almacenar los códigos del teclado
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        console.log(keyCodes);

        // Creación de las imágenes dentro del Canvas
        this.redCar = this.add.image(150, 175, "redCar");
        this.blueCar = this.add.image(450, 175, "blueCar");

        /*
        =============================================
        Ajuste de escalas
        =============================================
        */
        this.redCar.setScale(0.35);
        this.blueCar.setScale(0.05);

        /*
        =============================================
        Creación de atributo cursor y JSON
        =============================================
        */
        // Atributo Cursor de redCar
        this.redCursor = this.input.keyboard.createCursorKeys();

        // Conjunto de teclas blueCar
        this.blueKeys = this.input.keyboard.addKeys({
            up: keyCodes.W,
            down: keyCodes.S,
            left: keyCodes.A,
            right: keyCodes.D,
            shift: keyCodes.SHIFT
        });

        /*
        =============================================
        Definición de setAlpha (Transparencia)
        =============================================
        */
        // Método On Down redCar
        this.redCursor.space.on('down', () => {
            this.redCar.setAlpha(0.5);
        });

        // Método On Up redCar
        this.redCursor.space.on('up', () => {
            this.redCar.setAlpha(1);
        });

        // Método On Down blueCar
        this.blueKeys.shift.on('down', () => {
            this.blueCar.setAlpha(0.5);
        });

        // Método On Up blueCar
        this.blueKeys.shift.on('up', () => {
            this.blueCar.setAlpha(1);
        });

        /*
        =============================================
        Creación de combos
        =============================================
        */
        // Creación combo redCar
        this.redCombo = this.input.keyboard.createCombo(
            [keyCodes.LEFT, keyCodes.DOWN, keyCodes.RIGHT],
            { resetOnMatch: false }
        );

        // Creación combo blueCar
        this.blueCombo = this.input.keyboard.createCombo(
            [65, 83, 68],
            { resetOnMatch: false }
        );

        /*
        =============================================
        Timers
        =============================================
        */
        this.redTimer = 0;
        this.blueTimer = 0;

        /*
        =============================================
        Agregar texto en pantalla
        =============================================
        */
        this.blueCarText = this.add.text(40, 335, 'Combo Red Car: [←][↓][→]', {
            fontFamily: 'Consolas', fontSize: '14px'
        });

        this.redCarText = this.add.text(350, 335, 'Combo Blue Car: [A][S][D]', {
            fontFamily: 'Consolas', fontSize: '14px'
        });

        /*
        =============================================
        Funciones auxiliares distancia y info
        =============================================
        */
        this.distance = function (x1, y1, x2, y2) {
            return Math.sqrt(Math.pow((y2 - y1), 2) + Math.pow((x2 - x1), 2));
        }

        this.info = function (x1, y1, x2, y2) {
            return `redCar(${x1},${y1}) blueCar(${x2},${y2}) distancia(${Math.floor(this.distance(x1, y1, x2, y2))})`;
        }
    }

    update(time, delta) {
        /*
        =============================================
        Detector de eventos
        =============================================
        */
        this.input.keyboard.on('keydown', (evento) => {
            console.log(this.info(this.redCar.x, this.redCar.y, this.blueCar.x, this.blueCar.y));
        });

        this.input.keyboard.on('keycombomatch', (event) => {
            if (this.redCombo.matched)
                this.redCombo.resetOnMatch = true;
            if (this.blueCombo.matched)
                this.blueCombo.resetOnMatch = true;
        });

        /*
        =============================================
        Aplicación de tinte
        =============================================
        */
        if (this.redCombo.resetOnMatch) {
            this.redTimer += delta;
            if (0 < this.redTimer && this.redTimer <= 500)
                this.redCar.setTint('0xff0000');
            if (500 < this.redTimer && this.redTimer <= 1000)
                this.redCar.setTint('0xffffff');
            if (1000 < this.redTimer && this.redTimer <= 1500)
                this.redCar.setTint('0xff0000');
            if (2000 < this.redTimer && this.redTimer <= 2500)
                this.redCar.setTint('0xffffff');
            if (3000 < this.redTimer && this.redTimer <= 3500)
                this.redCar.setTint('0xff0000');
            if (4000 < this.redTimer && this.redTimer <= 4500)
                this.redCar.setTint('0xffffff');
            if (5000 < this.redTimer && this.redTimer <= 5500) {
                this.redCombo.resetOnMatch = false;
                this.redCar.clearTint();
                this.redTimer = 0;
            }
        }

        // -------------------------------------------

        if (this.blueCombo.resetOnMatch) {
            this.blueTimer += delta;
            if (0 < this.blueTimer && this.blueTimer <= 500)
                this.blueCar.setTint('0xff0000');
            if (500 < this.blueTimer && this.blueTimer <= 1000)
                this.blueCar.setTint('0xffffff');
            if (1000 < this.blueTimer && this.blueTimer <= 1500)
                this.blueCar.setTint('0xff0000');
            if (2000 < this.blueTimer && this.blueTimer <= 2500)
                this.blueCar.setTint('0xffffff');
            if (3000 < this.blueTimer && this.blueTimer <= 3500)
                this.blueCar.setTint('0xff0000');
            if (4000 < this.blueTimer && this.blueTimer <= 4500)
                this.blueCar.setTint('0xffffff');
            if (5000 < this.blueTimer && this.blueTimer <= 5500) {
                this.blueCombo.resetOnMatch = false;
                this.blueCar.clearTint();
                this.blueTimer = 0;
            }
        }

        /*
        =============================================
        Definición de movimiento
        =============================================
        */
        // Arriba redCar
        if (this.redCursor.up.isDown) {
            if (this.distance(this.redCar.x, this.redCar.y - 5, this.blueCar.x, this.blueCar.y) > 2 * 35) {
                if (this.redCar.flipX)
                    this.redCar.flipX = false;
                this.redCar.setAngle(270);
                this.redCar.y -= 5;
            }
        }

        // Abajo redCar
        if (this.redCursor.down.isDown) {
            if (this.distance(this.redCar.x, this.redCar.y + 5, this.blueCar.x, this.blueCar.y) > 2 * 35) {
                if (this.redCar.flipX)
                    this.redCar.flipX = false;
                this.redCar.setAngle(90);
                this.redCar.y += 5;
            }
        }

        // Izquierda redCar
        if (this.redCursor.left.isDown) {
            if (this.distance(this.redCar.x - 5, this.redCar.y, this.blueCar.x, this.blueCar.y) > 2 * 60) {
                this.redCar.setAngle(0);
                this.redCar.flipX = true;
                this.redCar.x -= 5;
            }
        }

        // Derecha redCar
        if (this.redCursor.right.isDown) {
            if (this.distance(this.redCar.x + 5, this.redCar.y, this.blueCar.x, this.blueCar.y) > 2 * 60) {
                this.redCar.setAngle(0);
                if (this.redCar.flipX)
                    this.redCar.flipX = false;
                this.redCar.x += 5;
            }
        }

        // --------------------------------------------------------------------------------------------------

        // Arriba blueCar
        if (this.blueKeys.up.isDown) {
            if (this.distance(this.blueCar.x, this.blueCar.y, this.redCar.x, this.redCar.y - 5) > 2 * 40) {
                if (this.blueCar.flipX)
                    this.blueCar.flipX = false;
                this.blueCar.setAngle(90);
                this.blueCar.y -= 5;
            }
        }

        // Abajo blueCar
        if (this.blueKeys.down.isDown) {
            if (this.distance(this.blueCar.x, this.blueCar.y, this.redCar.x, this.redCar.y + 5) > 2 * 40) {
                if (this.blueCar.flipX)
                    this.blueCar.flipX = false;
                this.blueCar.setAngle(270);
                this.blueCar.y += 5;
            }
        }

        // Izquierda blueCar
        if (this.blueKeys.left.isDown) {
            if (this.distance(this.blueCar.x - 5, this.blueCar.y, this.redCar.x, this.redCar.y - 5) > 2 * 60) {
                this.blueCar.setAngle(0);
                if (this.blueCar.flipX)
                    this.blueCar.flipX = false;
                this.blueCar.x -= 5;
            }
        }

        // Derecha blueCar
        if (this.blueKeys.right.isDown) {
            if (this.distance(this.blueCar.x + 5, this.blueCar.y, this.redCar.x, this.redCar.y) > 2 * 60) {
                this.blueCar.setAngle(0);
                this.blueCar.flipX = true;
                this.blueCar.x += 5;
            }
        }
    }
}

export default Bootloader;