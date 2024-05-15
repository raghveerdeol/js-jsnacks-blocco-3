/* Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro. */

const luffy = [1,2,3,4,];
const zoro = [1,2,3,4,5,6,7,8,9,];
let bigarray = 0;

if (luffy.length === zoro.length) {
    console.log('Sono della stessa lunghezza.')
} else if(luffy > zoro){
    bigarray = luffy;
} else{
    bigarray = zoro;
}


console.log(zoro, luffy, bigarray)