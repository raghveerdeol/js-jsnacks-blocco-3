/* Snack5
Dare la possibilità di inserire due parole. 
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
Se hanno la stessa lunghezza,
 stamparle entrambe altrimenti stampare la più lunga delle due. */

    let userFirstLettter = prompt("inserisci la prima parola");
    let userSecondLetter = prompt("inserisci la seconda parola");

    function lunghezzaParola(firstLetter, secondLetter) {
        if (firstLetter.length === secondLetter.length) {
            return true;
        } else{
            return false;
        }
    }

    if ( lunghezzaParola(userFirstLettter, userSecondLetter) === true){
        console.log(userFirstLettter, userSecondLetter);
    } else {
        if (userFirstLettter.length > userSecondLetter.length) {
            console.log(userFirstLettter);
        } else {
            console.log(userSecondLetter);
        }
    }