const leia = require("readline-sync");

let numero = leia.questionInt("Digite um numero: ");
let parImpar, positivoNegativo;

if(numero % 2 === 0){
    parImpar = "par";
}else{
    parImpar = "impar";
}
if(numero >= 0){
    positivoNegativo = "positivo";
}else{
    positivoNegativo = "negativo";
}   
console.log("O Número " + numero + " é " + parImpar + " e " + positivoNegativo + "!");