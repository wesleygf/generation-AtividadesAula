const leia = require("readline-sync");

let nome = leia.question("Digite o Nome do doador: ");
let idade = leia.questionInt("Digite a Idade do doador: ");
let primeiraDoacao = leia.question("É a primeira doação? : ").toLowerCase();
primeiraDoacao = primeiraDoacao == "true";

if((idade >= 18 && idade <= 69) && !primeiraDoacao) {
    console.log(nome + " está apto a doar sangue!");
}else if(idade >= 18 && idade <= 60){
    console.log(nome + " está apto a doar sangue!");
}else{
    console.log(nome + " não está apto a doar sangue!");
}