function saludar(nombre){
    //arguments: solo se utiliza en funciones y funciones aninimas y sirve para pandar los argumentos que se declararon en el identificador de la funcion
    console.log( arguments );
    console.log('Hola ' + nombre);
}


const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => console.log('Hola Flecha');

const saludarFlecha2 =  nombre  => console.log('Hola ' + nombre);

const retornoDeSalidar = saludar('julio', 32, true, 'México');
console.log( retornoDeSalidar );                                   
// saludar2('Cesar');

saludarFlecha();
saludarFlecha2('Romero');

//*return

function sumar(a, b) {  //funcion
    return a + b;
}

const sumar2 = (a, b) => a + b  // funcion flecha

function getAleatorio(){
    return Math.random()
}

const getAleatorio2 = () => Math.random();

console.log( sumar(1, 2) );

console.log( sumar2(5, 2) );

console.log(getAleatorio());

console.log(getAleatorio2());

