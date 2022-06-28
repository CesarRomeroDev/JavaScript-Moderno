let a = 5;

if (a >= 10) {      //undefined, null, asignación
    console.log( 'A es mayor o igual a 10');
}else {
    console.log('A es menor a 10');
}
// console.log('fin del programa');

const hoy = new Date();

let dia = hoy.getDay();

console.log({dia});

//* dia = 0; Asignación
//* dia == 0; No importa el tipo si es string o number 
//* dia === 0; forzosamente debe ser del mismo tipo
if (dia === 0) {
    console.log('Domingo');
} else if( dia === 1 ){
   console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
}else{
    console.log('No es Lunes, Martes o Domingo');
}


// const diaLetras = {
//     0: 'Domingo', 
//     1: 'Lunes', 
//     2: 'Martes', 
//     3: 'Miecoles', 
//     4: 'Jueves', 
//     5: 'Viernes', 
//     6: 'Sabado'
// };

const diaLetras2 = [
    'Domingo', 
    'Lunes', 
    'Martes', 
    'Miecoles', 
    'Jueves', 
    'Viernes', 
    'Sabado'
];

console.log('El día es: ' + diaLetras2[dia] || 'Dia no Definido');
