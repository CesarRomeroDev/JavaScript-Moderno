let a = 10;
let b = a;
a = 30;

console.log(a, b);

//* ... operador spread fuera de una funcion es para separa los elementos
//* ... parametro rest(arreglo) lo podemos usar en una funcion para hacerlos en arreglo
let juan = { nombre: 'juan' };
let ana  =  { ...juan };
ana.nombre = 'Ana';

console.log({juan , ana});

 //* El operador spread se puede usar en una funcion pero con corchetes indicando un objeto
const cambiasNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter =  { nombre: 'Peter' };
let tony = cambiasNombre( peter );

console.log({ peter, tony });


//* Arreglos 
const frutas = ['Manzana', 'Pera', 'Piña'];



console.time('slice');
const otrasFrutas = frutas.slice();                 //Con slice() tambien se rompe dicha relación
console.timeEnd('slice');

console.time('spreas');
const otrasFrutas2 = [...frutas];                   //Con el operador spread se rompe dicha relación, recomendado
console.timeEnd('spreas');

otrasFrutas.push('spreas');

console.table({ frutas, otrasFrutas });