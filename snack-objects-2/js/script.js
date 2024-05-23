// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

let persone = [
    {
        nome: "gino",
        cognome: "aoo",
        età: 18,
    },
    {
        nome: "gina",
        cognome: "jojo",
        età: 22,
    },
    {
        nome: "paolo",
        cognome: "bianco",
        età: 10,
    },
    {
        nome: "ugo",
        cognome: "rosso",
        età: 14,
    },
    {
        nome: "uga",
        cognome: "blue",
        età: 38,
    },
    {
        nome: "cisco",
        cognome: "rosa",
        età: 48,
    },
    {
        nome: "nino",
        cognome: "quanto",
        età: 5,
    },
    {
        nome: "nina",
        cognome: "guanto",
        età: 55,
    },
    {
        nome: "jojo",
        cognome: "monkey",
        età: 1,
    },
    {
        nome: "jaja",
        cognome: "shift",
        età: 76,
    },
];

const chiPoGuiddare = persone.map((singolaPersona) => {
    if (singolaPersona.età < 18) {
        return singolaPersona.nome + " " + singolaPersona.cognome + " " + "Non puo guidare";
    } else {
        return singolaPersona.nome + " " + singolaPersona.cognome + " " + "Può guidare";
    }
});
console.log(chiPoGuiddare)