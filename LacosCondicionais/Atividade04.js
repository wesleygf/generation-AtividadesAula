const leia = require("readline-sync");

let classificacao, grupo, dieta;

classificacao = leia.question();
grupo = leia.question();
dieta = leia.question();

if (classificacao == "vertebrado") {
    if (grupo == "ave") {
        if (dieta == "carnivoro") {
            console.log("Aguia");
        } else {
            console.log("Pomba");
        }
    }else{
        if (dieta == "onivoro") {
            console.log("Homem");
        } else {
            console.log("Vaca");
        }
    }
}else{
    if (grupo == "inseto") {
        if (dieta == "hematofago") {
            console.log("Pulga");
        } else {
            console.log("Lagarta");
        }
    }else{
        if (dieta == "hematofago") {
            console.log("Sanguessuga");
        } else {
            console.log("Minhoca");
        }
    }
}