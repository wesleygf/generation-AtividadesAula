import { Stack } from './Stack';
import leia = require('readline-sync');

const pilha = new Stack<string>();
let opcao: number = 0;
let livro: string;

do{
    console.log("\n********************************\n");
    console.log("1 - Adicionar Livro a pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("\n********************************");

    opcao = leia.questionInt("Entre com a opção desejada: ");

    switch(opcao){
        case 1:
            livro = leia.question("Digite o nome: ");
            pilha.push(livro);
            console.log("Pilha: \n");
            pilha.printStack();
            console.log("\nLivro Adicionado!");
            break;
        case 2:
            console.log("Lista de Livros na Pilha: \n");
            pilha.printStack()
            break;
        case 3:
            if (pilha.isEmpty()) {
                console.log("A Pilha está vazia!");
                break;
            }else{
                pilha.pop();
                console.log("Pilha: \n");
                pilha.printStack()
                console.log("\nUm Livro foi retirado da pilha!");
                break
            }
        case 0:
            console.log("Programa Finalizado!");
            break;
    }
        

}while (opcao != 0)
