/**
 * 2C = two of clubs
 * 2D = two of Diaminds
 * 2h = two of Hearts
 * 2S = two of Spades
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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
    console.log(deck);
    return deck
}



crearDeck();

//esta funcion me permite tomar una carta
const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas'
    }
    const carta = deck.pop();
    console.log(deck);
    console.log(carta);
    return carta
}

const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length -1);

    return ( isNaN( valor ) ) ? 
           ( valor === 'A' ) ? 11 : 10
            : valor * 1
    
}

const valor = valorCarta( pedirCarta() );
console.log({ valor });