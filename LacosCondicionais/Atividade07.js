const leia = require("readline-sync");

let numero1 = leia.questionFloat("DDigite o 1º número: ");
let numero2 = leia.questionFloat("Digite o 2º número: ");
let operacao = leia.questionInt("Operação: ");

switch(operacao){
    case 1:
        console.log(numero1.toFixed(1) + " + " + numero2.toFixed(1) + " = " + (numero1 + numero2).toFixed(1));
        break;
    case 2:
        console.log(numero1.toFixed(1) + " - " + numero2.toFixed(1) + " = " + (numero1 - numero2).toFixed(1));
        break;
    case 3:
        console.log(numero1.toFixed(1) + " * " + numero2.toFixed(1) + " = " + (numero1 * numero2).toFixed(1));
        break;
    case 4:
        if(numero2 != 0){
            console.log(numero1.toFixed(1) + " / " + numero2.toFixed(1) + " = " + (numero1 / numero2).toFixed(1));
        }else{
            console.log("Divisão por zero não é possivel.");
        }
        break;
    default:
        console.log("Operação Inválida.");
}