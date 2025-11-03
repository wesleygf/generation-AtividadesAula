import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {

    cores.push(leia.question("Digite uma cor: "));

}

console.log("Listar todas as cores:");
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

console.log("Ordenar as cores: ");
cores.sort();
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}