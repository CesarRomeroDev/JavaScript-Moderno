const heroes = ['Bantman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('FOR TRADDICIONAL');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('FOR in');

for(let i in heroes){
    console.log(heroes[i]);
}

console.warn('FOR of');

for(let heroe of heroes){
    console.log(heroe);
}