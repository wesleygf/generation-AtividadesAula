const leia = require("readline-sync");

let matriz = [2,5,1,3,4,9,7,8,10,6], valor, encontrado = false;

valor = leia.questionInt("Digite o número que você deseja encontrar: ");

for(let i = 0; i < matriz.length; i++){
    if(matriz[i] === valor){
        console.log("O número " + valor + " está localizado na posição: " + i);
        encontrado = true;
        break;
    }
}

if(!encontrado){
    console.log("O número " + valor + " não foi encontrado!");
}