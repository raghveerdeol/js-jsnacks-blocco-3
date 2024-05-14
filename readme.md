<!-- SNACKs:
1. TuttiFrutti
Cartella array-lista
Descrizione:
Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esistono le funzioni includes() e indexOf() ma noi non le vogliamo utilizzare per cercare nel frigorifero. -->

1- creo una array con dentro gli elementi del frigo;
2- aggiungo pesca alla fine del array frigo con .push();
3- per trovare l'elemento cocomero nel array uso:
    if (frigoriero[index] === cocomero){
        se trovo l'elemento stampo "Trovato! Devo solo preparare il cocktail.";
    } else {
        se non trovo elemento stampo "Oh no, devo uscire a comprare il cocomero!";
    }

<!-- 2. La coda dell'Array
Cartella: array_tail
Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente  conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array -->
1 creo un array vuoto;
2 uso prompt per chiedere al utente un numero n;
3 uso il numero n nel ciclo for ;
4 nel ciclo for genero n numeri casuali da inserire nel array;
5 uso slice con start( n - 5) end con n per stampare solo gli ultimi 5 numeri;
6 chiedo input x al utente e sostituisco slice (n - 5) con (n - x); 
 


<!-- 3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. -->
1 creo il primo array;
2 creo il secondo array;
3 se la lunghezza del primo array > secondo array allora uso ciclo for con index=arrey1.lenght; index < array2;
4 dentro il ciclo chiedo di produrre numeri random che poi aggiungo al array2
5 se lunghezza array2 > lunghezza array1 inverto gli array tra di loro nel processo for;
6 se lunghezza array1 = lunghezza array2 stampo che sono della stessa lunghezza;