const leia = require("readline-sync");

let numero, soma = 0;

do{
    numero = leia.questionInt("Digite um número: ");
    if(numero > 0){
        soma += numero; 
    }
}while(numero !== 0);

console.log("A soma dos números positivos é: " + soma);