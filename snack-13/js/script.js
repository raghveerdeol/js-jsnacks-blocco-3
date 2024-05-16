// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

/* function inverti(numero) {
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
 */
function inverti(numero) {
    const string = numero + '';
    let reversedString = '';
    
    for (let index = string.length - 1; index >= 0; index--) {
        reversedString += string[index];
        
    }
    return Number.parseInt(reversedString, 10);
}

let num = 321;
inverti(num);
console.log(inverti(num));
