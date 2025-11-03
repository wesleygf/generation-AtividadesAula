import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
    numeros.add(leia.questionInt(`Digite número inteiro não repetido: `));
}

console.log("Listar dados do Set:");

for(let numero of numeros){
    console.log(numero);
}