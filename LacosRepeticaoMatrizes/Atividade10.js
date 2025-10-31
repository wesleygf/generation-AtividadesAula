const leia = require("readline-sync");

let notas = [[],[],[],[],[],[],[],[],[],[]];
let medias = [];

for(let i = 0; i < 10; i++){
    console.log("Aluno " + (i + 1) + ":"); 
    for(let j = 0; j < 4; j++){
        notas[i][j] = leia.questionFloat("  Digite a " + (j + 1) + "ª nota: ");
    }
}

for(let i = 0; i < 10; i++){
    let soma = 0;
    for(let j = 0; j < 4; j++){
        soma += notas[i][j];
    }
    medias[i] = soma / 4;
}

for(let i = 0; i < 10; i++){
    process.stdout.write(medias[i].toFixed(1)+"| ");
}