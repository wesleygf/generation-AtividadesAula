const leia = require("readline-sync");

let menor = 0, maior = 0, idade = 0;

while(idade >= 0){

    idade = leia.questionInt("Digite uma idade: ");
    if(idade > 50){
        maior++;
    } else if(idade > 0 && idade < 21 ){
        menor++;
    }
} 

console.log("Total de pessoas menores de 21 anos: " + menor);
console.log("Total de pessoas maiores de 50 anos: " + maior);