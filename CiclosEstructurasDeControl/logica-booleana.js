const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log( true );
console.log( !true );
console.log( !false );


console.log(!regresaFalse()); //true

console.warn('And');            //true si todos los valores son verdaderos
console.log(true && true);      //true
console.log(true && !false);    //TRUE

console.log('===========================');
console.log( regresaFalse() && regresaTrue() );     //false
console.log( regresaTrue() && regresaFalse() );     //false


console.log('===========================');
regresaFalse() && regresaTrue();

console.log('OR'); //true

console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log( regresaFalse() && regresaTrue());

//* Pro tip: Asignaciones con operadores

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'HOLA' && 'MUNDO' && soyFalse && true;
const a3 = soyFalse || 'ya No soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'ya No soy falso de nuevo' || true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'ya No soy falso de nuevo' || true;
console.log({a1, a2, a3, a4, a5});

