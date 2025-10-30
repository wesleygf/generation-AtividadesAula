const leia = require("readline-sync");

let nome =  leia.question("Nome do colaborador: ");
let cargo = leia.questionInt("Cargo: ");
let salario = leia.questionFloat("Salário: R$ ");

switch(cargo){
    case 1:
        console.log("Nome do colaborador: " + nome);
        console.log("Cargo: Gerente");
        console.log("Salário: R$ " + (salario * 1.10).toFixed(2));
        break;
    case 2:
        console.log("Nome do colaborador: " + nome);
        console.log("Cargo: Vendedor");
        console.log("Salário: R$ " + (salario * 1.07).toFixed(2));
        break;
    case 3:
        console.log("Nome do colaborador: " + nome);
        console.log("Cargo: Supervisor");
        console.log("Salário: R$ " + (salario * 1.09).toFixed(2));
        break;
    case 4:
        console.log("Nome do colaborador: " + nome);
        console.log("Cargo: Motorista");
        console.log("Salário: R$ " + (salario * 1.06).toFixed(2));
        break;
    case 5:
        console.log("Nome do colaborador: " + nome);
        console.log("Cargo: Estoquista");
        console.log("Salário: R$ " + (salario * 1.05).toFixed(2));
        break;
    case 6:
        console.log("Nome do colaborador: " + nome);
        console.log("Cargo: Técnico de TI");
        console.log("Salário: R$ " + (salario * 1.08).toFixed(2));
        break;
}