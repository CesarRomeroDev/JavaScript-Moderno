const elMayor = (a, b) => a > b ? a: b;

console.log(elMayor(20, 15));


// function elMayor1(a, b){
//     if (a > b) {
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log(elMayor1(1, 10));

const tieneMembresia = (miembro) => (miembro)? '2 dolares': '10 dolares';
console.log(tieneMembresia(true));

// const tieneMembresia1 = function(miembros){
//     if (miembros) {
//        return '2 dolares'
//     }else{
//        return '10 dolares'
//     }
// }
// console.log(tieneMembresia1(false));

const amigo = true;
const amigosArr = [
    'peter',
    'Tony',
    'Dr Strange',
    amigo? 'Thor': 'Loki',
    elMayor(10, 15)
];
console.log(amigosArr);

const nota = 100;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C':
              nota >= 70 ? 'C': 'F';
console.log({ nota, grado });