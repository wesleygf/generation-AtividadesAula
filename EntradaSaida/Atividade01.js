const leia = require("readline-sync");

let salario, abono, novoSalario

salario = leia.questionFloat("Digite o Salario: R$");
abono = leia.questionFloat("Digite o Abono: R$");

novoSalario = salario + abono;

console.log("Novo Salario: R$" + novoSalario.toFixed(2));