const leia = require("readline-sync");

let codigoProduto = leia.questionInt("Código do Produto: ");
let quantidade = leia.questionInt("Quantidade: ");

switch(codigoProduto){
    case 1:
        console.log("Produto: Cachorro Quente");
        console.log("Valor Total: R$ " + (quantidade * 10.0).toFixed(2));
        break;
    case 2:
        console.log("Produto: X-Salada");
        console.log("Valor Total: R$ " + (quantidade * 15.0).toFixed(2));
        break;
    case 3:
        console.log("Produto: X-Bacon");
        console.log("Valor Total: R$ " + (quantidade * 18.0).toFixed(2));
        break;
    case 4:
        console.log("Produto: Bauru");
        console.log("Valor Total: R$ " + (quantidade * 12.0).toFixed(2));
        break;
    case 5:
        console.log("Produto: Refrigerante");
        console.log("Valor Total: R$ " + (quantidade * 8.0).toFixed(2));
        break;
    case 6:
        console.log("Produto: Suco de laranja");
        console.log("Valor Total: R$ " + (quantidade * 13.0).toFixed(2));
        break;
    }