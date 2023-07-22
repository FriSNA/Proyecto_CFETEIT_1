let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo del arreglo: ', juegos.length);

let primero =juegos[0];
let ultimo = juegos[juegos.length -1];

console.log('primero: ' + primero +' \nultimo: ', ultimo )

juegos.forEach((juegos, index, arr)=> {

    console.log(juegos, index, arr)
});

let nuevaLongitud = juegos.push('Resident Evil')
console.log({nuevaLongitud, juegos});

let metUnshift = juegos.unshift('Assasins Creed');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log(`Quitó a: ` , {juegoBorrado} ,`\nPor tanto el array queda como: `, {juegos} ); 

console.log('Para borrar una posición específica: ')

let borrar_1 = 1;

let juegosBorrados= juegos.splice(borrar_1, 2);
console.log({juegosBorrados, juegos});

//Saber posición indice de un elemento:

let metroidIndex= juegos.indexOf('Metroid'); //Funciona por CaseSensitive
console.log(metroidIndex);



