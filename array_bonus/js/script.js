/* <!-- 3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. -->
1 creo il primo array;
2 creo il secondo array;
 */

const gino = [1,2,3,4,5,6,2,4,6,7,8];
const ugo = [2,4,5,7,8,3];

if (gino.length > ugo.length) {
    for (let index = ugo.length; index < gino.length; index++) {
        ugo.push(Math.floor(Math.random() * 100) + 1);
    }
} else if (ugo.length > gino.length){
    for (let index = gino.length; index < ugo.length; index++) {
        gino.push(Math.floor(Math.random() * 100) + 1);
    }    
} else{
        console.log('Lunghezza Gino è uguale alla lunghezza di Ugo')
    }

console.log(gino, ugo);