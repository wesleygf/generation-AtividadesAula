import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

let encontrar: number, indice: number;
encontrar = leia.questionInt("Digite o número que você deseja encontrar: ");

indice = numeros.indexOf(encontrar);

if (indice != -1) {
    console.log(`O número ${encontrar} está localizado na posição: ${indice}`);
}else {
    console.log(`O número ${encontrar} não foi encontrado!`);
}