// 2C =Two of Clubs (Tréboles)
// 2C =Two of Diamonds (Diamantes)
// 2C =Two of Hearts (Corazones)
// 2C =Two of Spades (Espadas)
 let deck = [ ];
const tipos= ['C', 'D', 'H', 'S'];
const espacios = ['A', 'J', 'Q', 'K' ];
 const crearDeck = () =>{
for(let i=2; i<=10; i++){
deck.push(i+tipos); 
 }

 for(let tipo of tipos){
    for (let esp of espacios){
        deck.push(esp+tipos); 
    }
 }
 console.log(deck);
 deck = 
}

 crearDeck();
