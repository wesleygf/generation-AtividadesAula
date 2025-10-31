const leia = require("readline-sync");

let numeros = [];
let total=0, media=0;
let listaIndiceImpar = "";
let listaPares = "";

for(let i = 0; i < 10; i++){
    numeros[i] = leia.questionInt("Digite o " + (i + 1) + "º número: ");
    total += numeros[i];
    if(numeros[i] % 2 === 0){
        listaPares += numeros[i] + " ";
    }
    if(i % 2 !== 0){
        listaIndiceImpar += numeros[i] + " ";
    }
}

media = total / 10;

console.log("Elementos nos índices ímpares:")
console.log(listaIndiceImpar);
console.log("Elementos pares:")
console.log(listaPares);
console.log("Soma: " + total);
console.log("Média: " + media.toFixed(2));