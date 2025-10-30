const leia = require("readline-sync");

let salatioBruto, adicionalNoturno, horasExtra, descontos, salatioLiquido;

salatioBruto = leia.questionFloat("Digite o Salario Bruto: R$");
adicionalNoturno = leia.questionFloat("Digite o Adicional Noturno: R$");
horasExtra = leia.questionFloat("Digite o Valor das Horas Extras: R$");
descontos = leia.questionFloat("Digite o Valor dos Descontos: R$");

salatioLiquido = salatioBruto + adicionalNoturno + (horasExtra*5) - descontos;

console.log("Salario Liquido: R$" + salatioLiquido.toFixed(2));