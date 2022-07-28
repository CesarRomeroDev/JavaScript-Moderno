//* Propiedades y metodos estaticos
class Persona {             //primer nombre de la clase en mayuscula
    nombre = "";            //inicializando propiedades de clase
    codigo = "";
    frase = "";
    comida = "pizza";
//* Constructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){          //El constructor se ejecuta cuando se crea una nueva instancia de Persona
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
//* set y get
    set setcomidaFavorita(comida) {     //el set solo recibe un argumento y es para establecer un valor
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){            //el get es para recuperar un valor
        return `La comida Favorita de ${ this.nombre } es ${ this.comida }`
    }
//*Metodos
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

spiderman.setcomidaFavorita = 'El pie de cereza de la tía May'
console.log( spiderman.getComidaFavorita );

console.log(spiderman);
console.log(ironman);