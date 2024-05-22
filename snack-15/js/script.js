// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.

let palla =  {
    "nome": "palla",
    "peso": "10"
}

let userWeight = Number.parseInt(prompt("inserisci peso"));
palla["peso"] = userWeight;