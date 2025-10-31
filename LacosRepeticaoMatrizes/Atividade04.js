const leia = require("readline-sync");

let idade, genero, funcao;
let continua = true;
let totalBackEnd = 0, totalMulherFront = 0, totalHomemMobileMaiorQuarenta = 0, totalNBFullMenorTrinta = 0;
let totalPessoas = 0,totalIdades = 0, mediaIdade = 0.0;

while(continua){

    idade = leia.questionInt("Digite a idade: ");
    genero = leia.questionInt("Identidade de Gênero: ");
    funcao = leia.questionInt("Pessoa Desenvolvedora: ");

    if(funcao === 1){
        totalBackEnd++;
    }

    if((genero === 1 || genero === 4) && funcao === 2){
        totalMulherFront++;
    }

    if((genero === 2 || genero === 5) && (funcao === 3) && (idade > 40)){
        totalHomemMobileMaiorQuarenta++;
    }

    if((genero === 3) && (funcao === 4) && (idade < 30)){
        totalNBFullMenorTrinta++;
    }

    totalIdades += idade;
    totalPessoas++;
    continua = leia.keyInYNStrict("Deseja continuar (Y/N): ");
}

mediaIdade = totalIdades / totalPessoas;

console.log("Total de pessoas desenvolvedoras Backend: " + totalBackEnd);
console.log("Total de Mulheres Cis e Trans desenvolvedoras Frontend: " + totalMulherFront);
console.log("Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: " + totalHomemMobileMaiorQuarenta);
console.log("Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: " + totalNBFullMenorTrinta);
console.log("O número total de pessoas que responderam à pesquisa: " + totalPessoas);
console.log("Média de idade das pessoasque responderam à pesquisa: " + mediaIdade.toFixed(2));