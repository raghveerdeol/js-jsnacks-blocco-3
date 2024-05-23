// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.
let automobili = [
    {
        marca: "Fiat" ,
        modello: "punto" ,
        alimentazione: "benzina" ,
    },
    {
        marca : "volvo",
        modello: "ovo3",
        alimentazione: "diesel",
    },
    {
        marca : "tesla",
        modello: "x",
        alimentazione: "eletrico",
    },
    {
        marca : "fiat",
        modello: "500",
        alimentazione: "gpl",
    },
    {
        marca : "tesla",
        modello: "y",
        alimentazione: "eletrico",
    },
    {
        marca : "bmw",
        modello: "120",
        alimentazione: "metano",
    },
    {
        marca : "audi",
        modello: "a1",
        alimentazione: "benzina",
    },
    {
        marca : "audi",
        modello: "q3",
        alimentazione: "diesel",
    },
    {
        marca : "mercedez",
        modello: "benz",
        alimentazione: "benzina",
    },
    {
        marca : "audi",
        modello: "q6",
        alimentazione: "diesel",
    },
    {
        marca : "toyota",
        modello: "t4",
        alimentazione: "gpl",
    },
    {
        marca : "honda",
        modello: "h6",
        alimentazione: "diesel",
    },
    {
        marca : "hqk",
        modello: "ccc",
        alimentazione: "eletrico",
    },
    {
        marca : "hfhfff",
        modello: "fgre",
        alimentazione: "metano",
    },
    {
        marca : "cisco",
        modello: "zyx",
        alimentazione: "benzina",
    },
];

const autoBenzina = automobili.filter((auto) => {
    if (auto.alimentazione === "benzina") {
        return true;
    }
});
const autoDiesel = automobili.filter((auto) => {
    if (auto.alimentazione === "diesel") {
        return true;
    }
});
const altreAuto = automobili.filter((auto) => {
    if (auto.alimentazione !== "diesel" && auto.alimentazione !== "benzina") {
        return true;
    }
});