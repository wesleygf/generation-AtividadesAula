const leia = require("readline-sync");

let total = 0, multiplos = 0, numero;

do{
    numero = leia.questionInt("Digite um número: ");
    if(numero % 3 === 0 && numero > 0){
        multiplos++;
        total += numero;
    }

}while(numero !== 0);

console.log("A média de todos os números múltiplos de 3 é: " + (total / multiplos).toFixed(2));