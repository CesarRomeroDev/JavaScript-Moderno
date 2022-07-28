class Persona {             //primer nombre de la clase en mayuscula
    nombre = "";            //inicializando propiedades de clase
    codigo = "";
    frase = "";
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){          //El constructor se ejecuta cuando se crea una nueva instancia de Persona
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy(){
        console.log(`soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }
    miFrase(){
        this.quienSoy();    //Se puede usar un metodo dentro de otro metodo, siempre con el this.
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('Piter', 'Spiderman', 'Soy tu amigable');
spiderman.quienSoy();
spiderman.miFrase()
const ironman = new Persona('Tony', 'Ironman', 'Yo soy Ironman')
ironman.quienSoy();
ironman.miFrase()
console.log(spiderman);
console.log(ironman);