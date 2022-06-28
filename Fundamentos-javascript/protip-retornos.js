// function crearPersona(nombre, apellido) {
//     return { nombre,apellido }
// }

const crearPersona = (nombre, apellido) => ( { nombre, apellido } );  //los parentesis en para indicar que quiero retornar un objeto

const persona = crearPersona('Julio', 'Romero');
console.log(persona);

const {nombre:nuevoNombre, apellido: nuevoApellido} = crearPersona('Julio', 'Romero');
console.log(nuevoNombre, nuevoApellido);

//* arguments solo se usan en funciones o funciones anonimas
function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Julio', 'Hola');


 //*...args se usa para funciones flecha

const imprimeArgumentos2 = (edad, ...args) => {
    console.log({edad, args});
    // return args
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Julio', 'Hola');
console.log({ casado, vivo, nombre, saludo });


//* Destructuración de Objetos
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimiPropiedades = (personaje) => {
//     console.log( 'nombre ',   personaje.nombre );
//     console.log( 'codeName ', personaje.codeName );
//     console.log( 'vivo ',     personaje.vivo );
//     console.log( 'edad ',     personaje.edad );
//     console.log( 'trajes ',   personaje.trajes );
// }


//*Destructuración de Objetos
const imprimiPropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes}); 
}

imprimiPropiedades( tony );