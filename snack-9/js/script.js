/* Snack9 Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
 se è dispari inseriscilo nell'array. */

const jojo = [];
let x = 0;
while (jojo.length < 6) {
    x = Number.parseInt(prompt("inserisci un numero"), 10);
    console.log(x);
    if (x % 2 === 1) {
        jojo.push(x);
    }
}

console.log(x, jojo);