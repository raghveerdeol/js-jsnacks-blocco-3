// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userNumber = Number.parseInt(prompt("inserisci il timer"));
const mainEl = document.querySelector("main");
let hEL = document.createElement("h1");
mainEl.appendChild(hEL);
const timer = setInterval(function(){
    hEL.append(userNumber--);
    if (userNumber <= 0) {
        clearInterval(timer);
    }
    console.log(userNumber);
},1000)