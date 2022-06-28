const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

console.warn('While');
while( carros[i] ){     //condicion tiene que ser verdadera 
    if (i === 1) {
        //
        i++
        continue;
    }
    console.log( carros[i] );
    i++;
}

console.warn('Do While');

let j = 0;

do{
    console.log(carros[j]);
    j++
}while( carros[j] );