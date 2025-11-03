import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

let encontrar: number;
encontrar = leia.questionInt("Digite o número que você deseja encontrar: ");

if (numeros.has(encontrar)) {
    console.log(`O número ${encontrar} foi encontrado!`);
}else {
    console.log(`O número ${encontrar} não foi encontrado!`);
}