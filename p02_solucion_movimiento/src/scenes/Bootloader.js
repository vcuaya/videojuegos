class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: "Bootloader" //Nombre interno o clave de referencia
        });
    }

    init() {
        console.log("Soy init");
    }

    preload() {
        this.load.path = "./assets/";               //Ruta de todas las imagenes
        //this.load.image("yoshi", "yoshi.png");    //alias y archivo
        //this.load.image("yoshi_fondo");           //Sin nombre de archivo, se toma por de-
                                                    //fecto el nombre del alias
        this.load.image(["yoshi_fondo", "yoshi"]);  //Arreglo de imagenes
    }

    create() {
        this.yoshif = this.add.image(130, 130, "yoshi_fondo"); //atributo
        this.yoshi = this.add.image(100, 100, "yoshi"); //atributo
        this.inc = 0.8;

        //this.yoshif.setVisible(false);    // ACTIVAR VISIBILIDAD (yoshi gris)

        //this.yoshi.setOrigin(0, 0);       // COLOCAR EL ORIGEN EN LA ESQUINA SUPERIOR IZQUIERDA DE LA IMAGEN
        //this.yoshi.flipX = true;          // VOLTEAR HORIZONTALMENTE
        //this.yoshi.flipY = true;          // VOLTEAR VERTICALMENTE
        //this.yoshi.setVisible(false);     // ACTIVAR VISIBILIDAD
        //this.yoshi.setScale(2.5, 1);      // ESCALADO HORIZONTAL DEL (250 %)
        //this.yoshi.setAlpha(0.3);         // ESPECIFICACIÓN DE TRANSPARENCIA (30 %) 
        //this.yoshi.setTint(0xff0000);     // ESPECIFICACIÓN DE COLOR DE TINTE FORMATO RGB-HEXADECIMAL
        //this.yoshi.x = 200;               // CAMBIAR LA COORDENADA X DE LA POSICIÓN DEL PERSONAJE
        //this.yoshi.y = 200;               // CAMBIAR LA COORDENADA Y DE LA POSICIÓN DEL PERSONAJE
        //this.yoshi.angle = 10;            // CAMBIAR EL ANGULO DE ROTACIÓN (EN GRADOS)
        //this.yoshi.rotation = Math.PI/2;  // CAMBIAR EL ANGULO DE ROTACIÓN (EN RADIANES)
        //this.yoshi.setDepth(1);           // CAMBIAR EL NÚMERO DE CAPA O NIVEL DE LA IMAGEN EN LA ESCENA
        //this.yoshif.setDepth(2);          // CAMBIAR EL NÚMERO DE CAPA O NIVEL DE LA IMAGEN EN LA ESCENA (yoshi gris)


        //console.log(this.yoshi);                          // MOSTRAR EN CONSOLA TODAS LAS PROPIEDADES DEL OBJETO
        //console.log("Origen X: " + this.yoshi.originX);   // MOSTRAR EN CONSOLA VALOR DE X DE LA PROPIEDAD DEL "ORIGEN"
    }
    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
        this.yoshi.x = this.yoshi.x + (this.inc);   //equivalente a     this.yoshi.x += this.inc;

        if (this.yoshi.x <= 40 || this.yoshi.x >= 600) {
            this.inc = this.inc * (-1);             //equivalente a     this.inc *= -1; 
            if (this.yoshi.x <= 40) {
                this.yoshi.setFlipX(false);
            } else {
                this.yoshi.setFlipX(true);
            }
        }
    }
}

export default Bootloader;