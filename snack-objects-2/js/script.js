// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

let persone = [
    {
        nome: "gino",
        età: 18,
    },
    {
        nome: "gina",
        età: 22,
    },
    {
        nome: "paolo",
        età: 10,
    },
    {
        nome: "ugo",
        età: 14,
    },
    {
        nome: "uga",
        età: 38,
    },
    {
        nome: "cisco",
        età: 48,
    },
    {
        nome: "nino",
        età: 5,
    },
    {
        nome: "nina",
        età: 55,
    },
    {
        nome: "jojo",
        età: 1,
    },
    {
        nome: "jaja",
        età: 76,
    },
];

const maggiorenne = persone.map((singolaPersona) => {
    if (singolaPersona.età < 18) {
        return singolaPersona.nome + "Non puo guidare";
    } else {
        return singolaPersona.nome + " Può guidare"
    }
});
console.log(maggiorenne)