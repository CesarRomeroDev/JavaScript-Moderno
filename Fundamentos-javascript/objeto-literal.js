const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
};

console.log(personaje);
console.log(`Nombre: ${personaje.nombre}`);
console.log(`Nombre: ${personaje['nombre']}`);
console.log(`Edad: ${personaje.edad}`);

console.log(`Coors: ${personaje.coords.lat}`);
console.log(`Numero de trajes: ${personaje.trajes.length}`);
console.log(`Ultimo traje: ${personaje.trajes[personaje.trajes.length - 1]}`);

const x = 'vivo';
console.log(`Vivo? `, personaje[x]);

console.log(`Ultima Pelicula: ${personaje["ultima-pelicula"]}`);

//* Mas detalles.

delete personaje.edad       //eliminar una propiedad
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries( personaje );   //Object.entries para hacer nuestro objeto en arreglo
console.log(entriesPares);
console.log(entriesPares[4]);

//freeze: conjela los valor y no se pueden modificar o agregar mas al objeto personaje
//Pero si podemos modificar o eleminar los valores que no estan como principales
Object.freeze( personaje );
// personajes.dinero = 1000000000000;       //no se agrega por el metodo freeze
personaje.casado = false;                   // no se modifica por el metodo freeze
personaje.direccion.ubicacion = 'México'    //se modifica por que son valores que no se encuentral como principales
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);      //Object.getOwnPropertyNames: muestra solo las propiedades principales
const valores = Object.values(personaje);                       //Object.values: imprimi solo los valores de las propiedades
console.log(propiedades, valores);