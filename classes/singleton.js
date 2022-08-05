/** Un Singleon es una Instancia única de mi Clase */

class Singleton {

    static instancia;           //undefined cuando no se le asigna ningun valor
    nombre = '';
    constructor(nombre = ''){

        const a = undefined;
        console.log(a); // undefined
        console.log(!a); // '!a' es undefined? y 'a es undefine' entonces !a === a = 'true'
        console.log(!!a); // '!!a' es 'false'? y '!a' es 'true' entonces !!a === !a = 'false'
                            // esto se hace por que es mas facil trabajar con el valor boolean a que lo evalue con un valor null, undefined

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

        return this;

    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');






console.log(`Nombre en la instancia es : ${ instancia1.nombre }`);
console.log(`Nombre en la instancia es : ${ instancia2.nombre }`);
console.log(`Nombre en la instancia es : ${ instancia3.nombre }`);