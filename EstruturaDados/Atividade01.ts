import { Queue } from "./Queue";
import leia = require("readline-sync");

const fila = new Queue<string>();
let opcao: number = 0;
let cliente: string;

do{
    console.log("\n********************************\n");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("\n********************************");

    opcao = leia.questionInt("Entre com a opção desejada: ");

    switch(opcao){
        case 1:
            cliente = leia.question("Digite o nome: ");
            fila.enqueue(cliente);
            console.log("Fila: \n");
            fila.printQueue();
            console.log("\nCliente Adicionado!");
            break;
        case 2:
            console.log("Lista de Clientes na Fila: \n");
            fila.printQueue()
            break;
        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia!");
                break;
            }else{
                fila.dequeue();
                console.log("Fila: \n");
                fila.printQueue()
                console.log("O Cliente foi Chamado!");
            }
            
            break
        case 0:
            console.log("Programa Finalizado!");
            break;
    }
}while (opcao != 0) 


