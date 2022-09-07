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
        this.load.path = "./assets/";                           // Ruta de todas las imágenes
        this.load.image("forest");
        this.load.image("druid");
        this.load.image("cauldron");
        this.load.image("flying_owl");
        this.load.image("red_eyes1", "red_eyes.png");
        this.load.image("red_eyes2", "red_eyes.png");
        this.load.image("red_eyes3", "red_eyes.png");
    }

    create() {
        this.add.image(400, 300, "forest");

        this.druid = this.add.image(330, 560, "druid");
        this.druid.setScale(0.9);
        this.druid.setDepth(1);

        this.cauldron = this.add.image(700, 640, "cauldron");
        this.cauldron.setScale(0.4);
        this.cauldron.setTint(0xE2DA46);

        this.owl = this.add.image(1050, 450, "flying_owl");
        this.owl.setAlpha(0.9);

        this.eyes1 = this.add.image(450, 540, "red_eyes1");
        this.eyes1.setScale(0.1);

        this.eyes2 = this.add.image(100, 600, "red_eyes2");
        this.eyes2.setScale(0.2);

        this.eyes3 = this.add.image(870, 600, "red_eyes3");
        this.eyes3.setScale(0.2);
    }

    update(time, delta) {
        // Control de giro
        if (this.owl.x == 1050) {
            this.owl.flipX = 0;
            this.eyes1.setVisible(false);
            this.eyes2.setVisible(false);
            this.eyes3.setVisible(false);
        }
        if (this.owl.x == 500) {
            this.owl.flipX = 1;
            this.eyes1.setVisible(true);
            this.eyes2.setVisible(true);
            this.eyes3.setVisible(true);
        }

        // Control de avance
        if (this.owl.flipX == false)
            this.owl.x -= 5;
        if (this.owl.flipX == true)
            this.owl.x += 5;
    }
}

export default Bootloader;