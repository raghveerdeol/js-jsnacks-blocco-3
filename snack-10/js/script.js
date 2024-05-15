/* Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro. */

const luffy = [1,2,3,4,];
const zoro = [1,2,3,4,5,6,7,8,9,];
let bigarray = 0;
let smallarray = 0;

if (luffy.length === zoro.length) {
    console.log('Sono della stessa lunghezza.')
} else if(luffy > zoro){
    bigarray = luffy;
    smallarray = zoro;
} else{
    bigarray = zoro;
    smallarray = luffy;
}

while (smallarray.length < bigarray.length) {
    smallarray.push((Math.floor(Math.random() * 100) + 1));
    
}

console.log(zoro, luffy)