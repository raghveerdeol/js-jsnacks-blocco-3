/* 1 creo un array vuoto;
2 uso prompt per chiedere al utente un numero n;
3 uso il numero n nel ciclo for ;
4 nel ciclo for genero n numeri casuali da inserire nel array;
5 uso slice con start( n - 5) end con n per stampare solo gli ultimi 5 numeri;
6 chiedo input x al utente e sostituisco slice (n - 5) con (n - x); 
  */

const gina = [];
const n = Number.parseInt(prompt('inserisci il numero degli elementi di gina'));
const x = Number.parseInt(prompt('inserisci il numero degli elementi da mostrare'));

for (let index = 0; index < n; index++) {
    gina.push(Math.floor(Math.random() * 100) + 1)
}
const uga = gina.slice(n - x, n);

console.log(gina, n, uga)