const leia = require("readline-sync");

let a, b, c, mensagemConta;

a = leia.questionInt("Digite o numero A: ");
b = leia.questionInt("Digite o numero B: ");
c = leia.questionInt("Digite o numero C: ");

mensagemConta = a + " + " + b + " = " + (a + b);

if ((a+b)>c){
    console.log(mensagemConta+ " > "+ c);
    console.log("A Soma de A + B é Maior do que C");
}else if ((a+b)<c){
    console.log(mensagemConta + " < "+ c);
    console.log("A Soma de A + B é Menor do que C");
}else{
    console.log(mensagemConta + " = "+ c);
    console.log("A Soma de A + B é Igual a C");
}