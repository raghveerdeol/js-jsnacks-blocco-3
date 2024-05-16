// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

function inverti(numero) {
    return (
        parseFloat(
        numero
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(numero)
    )
    
}
let num = 321;
inverti(num);
console.log(inverti(num))
