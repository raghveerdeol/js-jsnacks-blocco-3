/* Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50. */

const lino = [];
const z = Number.parseInt(prompt('inserire un numero'));
lino.push(z);
let somma = z;

while (somma < 50) {
    const x = Number.parseInt(prompt('inserire un numero'));
    lino.push(x)
    somma = somma + x;
}

console.log(lino, somma);