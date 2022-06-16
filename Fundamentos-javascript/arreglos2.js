let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[ juegos.length - 1 ];

console.log(primero, ultimo);


juegos.forEach( (elemento, indice, arr) => {
    console.log( {elemento, indice, arr} );
} );

//* .push() agregar un nuevo elemento al final del arreglo
let nuevaLong = juegos.push( 'F-Zero' );
console.log(nuevaLong, juegos);

//* .unshift() agregar un nuevo elemento al inicio del arreglo
nuevaLong = juegos.unshift( 'Fire Emblem' );
console.log(nuevaLong, juegos);

//* .pop() elimina un elemento al final del arreglo
let juegoBorrado =  juegos.pop();
console.log( { juegoBorrado, juegos } );

let pos = 1;

//* .plice( posicion, cuantosAEliminar ) borra uno o varios elementos indicando la posicion y cuantos a eleiminar como paramentros.
let elementosBorrados =  juegos.splice( pos, 2);
console.log(elementosBorrados, juegos);

//* .indexOf() Indica la posicion de un elemento en un arreglo.
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);