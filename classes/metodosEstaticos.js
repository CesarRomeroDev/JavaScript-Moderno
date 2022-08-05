//* Propiedades y metodos estaticos
class Persona {             //primer nombre de la clase en mayuscula

    static _conteo = 0;
    static get getConteo(){
        return Persona._conteo + ' instancias';
    }
    static mensaje(){
        console.log( this.nombre );                             //undefined. por que estamos trabajndo en un metodo estático 
        console.log( 'Hola a todos, soy un método estático' );
    }

    nombre = "";            //inicializando propiedades de clase
    codigo = "";
    frase = "";
    comida = "pizza";
//* Constructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){          //El constructor siempre se va ejecuta cuando se crea una nueva instancia de clase Persona
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++                                                                   //inicializamos en el contructor
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
// spiderman.quienSoy();
// spiderman.miFrase();

const ironman = new Persona('Tony', 'Ironman', 'Yo soy Ironman');
// ironman.quienSoy();
// ironman.miFrase()


spiderman.setcomidaFavorita = 'El pie de cereza de la tía May'
console.log( spiderman.getComidaFavorita );

// console.log(spiderman);
// console.log(ironman);

// Persona._conteo = 2;                               //Las propiedades estáticas se llaman con el nombre de la clase y se pueden modificar.
console.log('Conteo estático', Persona._conteo);
console.log( Persona.getConteo );
Persona.mensaje();

Persona.propiedadExterna = 'HolaMundo';         //Se pueden hacer propiedades estáticas fuera de la clase, pero es mala practica
console.log( Persona.propiedadExterna );