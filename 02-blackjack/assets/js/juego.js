/**
 * 2C = two of clubs
 * 2D = two of Diaminds
 * 2h = two of Hearts
 * 2S = two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
    puntosComputadora = 0;

//referencias del html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')
const puntosHTML = document.querySelectorAll('small')

//Crea una nueva baraja aleatoria
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos){
            deck.push( i + tipo );
        }
    }
    for(let especial of especiales){
        for(let tipo of tipos){
            deck.push( especial + tipo);
        }
    }
    // _.shuffle: Nos brinda una copia mezclada de la lista
    deck = _.shuffle( deck );
    return deck
}



crearDeck();

//esta funcion me permite tomar una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas'
    }
    const carta = deck.pop();
    return carta
}

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length -1);

    return ( isNaN( valor ) ) ? 
           ( valor === 'A' ) ? 11 : 10
            : valor * 1
    
}

//Computadora

const turnoComputadora = ( puntosMinimos ) => {
    do {
    const carta = pedirCarta();
    puntosComputadora += valorCarta( carta );
    puntosHTML[1].innerText = puntosComputadora;

    //imagen
    // <img class="carta" src="assets/cartas/2C.png"> 
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);

    if(  puntosMinimos > 21){
        break;
    }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ) );
}

//eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    //imagen
    // <img class="carta" src="assets/cartas/2C.png"> 
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );                   //bloquear boton
    }else if( puntosJugador === 21 ){
        console.warn( '21, Genial!!' );
        btnPedir.disabled = true;
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador );
});

