/* 1- creo una array con dentro gli elementi del frigo;
2- aggiungo pesca alla fine del array frigo con .push();
3- per trovare l'elemento cocomero nel array uso:
    if (frigoriero[index] === cocomero){
        se trovo l'elemento stampo "Trovato! Devo solo preparare il cocktail.";
    } else {
        se non trovo elemento stampo "Oh no, devo uscire a comprare il cocomero!";
    }
 */

    let frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
    frigo.push('pesca');
    for (let index = 0; index < frigo.length; index++) {
        if (frigo[index] === 'cocomero') {
            console.log("Trovato! Devo solo preparare il cocktail.");
        } else {
            console.log("Oh no, devo uscire a comprare il cocomero!");
        }
    }

    console.log(frigo)