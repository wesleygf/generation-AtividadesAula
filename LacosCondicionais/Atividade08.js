const leia = require("readline-sync");

let operacao = leia.questionInt("Operação: ");
let saldo = 1000.00;

switch(operacao){
    case 1:
        console.log("Operação - Saldo");
        console.log("Saldo: R$" + saldo.toFixed(2));
        break;
    case 2:
        console.log("Operação - Saque");
        let valorSaque = leia.questionFloat("Valor: R$ ");
        if(valorSaque > saldo){
            console.log("Saldo Insuficiente!");
        }else{
            saldo -= valorSaque;
            console.log("Novo Saldo: R$ " + saldo.toFixed(2));
        }
        break;
    case 3:
        console.log("Operação - Depósito");
        let valorDeposito = leia.questionFloat("Valor: R$ ");
        saldo += valorDeposito;
        console.log("Novo Saldo: R$ " + saldo.toFixed(2));
        break;
    default:
        console.log("Operação Inválida.");
}