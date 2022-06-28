const dia = 1; //domingo
const horaActual = 11;

let horaApertura;
let mensaje;

/**includes(): metodo que tienen los arreglos, para preguntar si algo existe dentro de ese arreglo */
// if ([0, 6].includes( dia )) {
//     console.log('fin de semana');
//     horaApertura = 9
// }else{
//     console.log('día de la semana');
//     horaApertura = 11
// }
horaApertura = ([0,6].includes(dia)) ? 9: 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
// }else{
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`
// }

mensaje = (horaActual >= horaApertura)? 'Esta abierto':  `Está cerrado, hoy abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje});

