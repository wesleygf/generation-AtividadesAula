const leia = require("readline-sync");

let matriz = [[],[],[]];
let diagonalPrincipal = "", diagonalSecundaria = "";
let somaDiagonalPrincipal = 0, somaDiagonalSecundaria = 0;

for(let i = 0 ; i < 3; i++){
    for(let j = 0; j < 3; j++){
        matriz[i][j] = leia.questionInt("Digite o valor para a posição [" + i + "][" + j + "]: ");
        if(i === j){
            diagonalPrincipal += matriz[i][j] + " ";
            somaDiagonalPrincipal += matriz[i][j];
        }
        if(i + j === matriz.length - 1){
            diagonalSecundaria += matriz[i][j] + " ";
            somaDiagonalSecundaria += matriz[i][j];
        }
    }
} 
console.log("Elementos da Diagonal Principal:");
console.log(diagonalPrincipal);
console.log("Elementos da Diagonal Secundária:");
console.log(diagonalSecundaria);
console.log("Soma dos Elementos da Diagonal Principal: " + somaDiagonalPrincipal);
console.log("Soma dos Elementos da Diagonal Secundária: " + somaDiagonalSecundaria);

