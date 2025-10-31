const leia = require("readline-sync");

let numero1, numero2;

numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
numero2 = leia.questionInt("Digite o ultimo numero do intervalo: ");

if(numero1 > numero2){
    console.log("Intervalo inválido!");
}else{

    for(let i = numero1; i <= numero2; i++){
        if( i % 15 === 0){
            console.log(i + " é múltiplo de 3 e 5")
        }
    }

}