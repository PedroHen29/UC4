import readlineSync from "readline-sync";
import { Livro } from "./Livro";
import { Estoque } from "./Estoque";
import { Roupa } from "./Roupa";
import { Brinquedo } from "./Brinquedo";
import { Eletronico } from "./Eletronico";
console.log("Hello TypeScript!");
const estoqueLivros = new Estoque<Livro>()
const estoqueRoupa = new Estoque<Roupa>()
const estoqueBrinqudo = new Estoque<Brinquedo>()
const estoqueEletronico = new Estoque<Eletronico>()
let opcao = ""
do {
console.log(`
    1- Cadastrar produto
    2- Listar produtos
    3- Remover produto
    4- Buscas produto
    5- Sair
`)
opcao = readlineSync.question("Qual operação você deseja realizar? ")
switch(opcao){
    case "1":
        let produto = readlineSync.question("Qual produto você deseja adicionar? ")
        if(produto === "Livro"){
            adicionarLivro()
        }else if(produto === "Roupa"){
            adicionarRoupa()
        }else if(produto === "Brinquedo"){
            adicionarBrinquedo()
        }else if(produto === "Eletronico"){
            adicionarEletronico()
        }else {
            console.log("❌ Tipo de produto invalido! Tente outro.")
        }
        break
        case "2": 
           console.log(estoqueLivros.listar())
           console.log(estoqueRoupa.listar())
           console.log(estoqueBrinqudo.listar())
           console.log(estoqueEletronico.listar())
        break
        case "3":
            let pergunta = readlineSync.question("Qual é o nome do produto que você deseja remover? ")
            let indice = Number(readlineSync.question("Digite o numero desejado: "))
            if(pergunta === "Livro"){
                estoqueLivros.remover(indice)
                console.log(estoqueLivros.listar())
            }else if(pergunta === "Roupa"){
                estoqueRoupa.remover(indice)
                console.log(estoqueRoupa.listar())
            }else if(pergunta === "Brinquedo"){
                estoqueBrinqudo.remover(indice)
                console.log(estoqueBrinqudo.listar())
            }else if(pergunta === "Eletronico"){
                estoqueEletronico.remover(indice)
                console.log(estoqueEletronico.listar())
            }
            
        break
        case "4":
           
        break
        case "5":
            console.log("Saindo do sistema, até mais...")
}
}
while(opcao != "5")
function adicionarLivro(){
    let tituloLivro = readlineSync.question("Titulo: ")
            let autorLivro = readlineSync.question("Autor: ")
            let precoLivro = Number(readlineSync.question("Preço: "))
            const novoLivro = new Livro (tituloLivro, autorLivro, precoLivro)
            estoqueLivros.adicionar(novoLivro)
}
function adicionarRoupa(){
    let descricaoRoupa = readlineSync.question("Descrição: ")
            let tamanhoRoupa = readlineSync.question("Tamanho: ")
            let precoRoupa = Number(readlineSync.question("Preço: "))
            const novaRoupa = new Roupa(descricaoRoupa, tamanhoRoupa, precoRoupa)
            estoqueRoupa.adicionar(novaRoupa)
}
function adicionarBrinquedo(){
    let nomeBrinquedo = readlineSync.question("Nome: ")
            let idadeMinima = Number(readlineSync.question("Idade Minima: "))
            let precoBrinquedo = Number(readlineSync.question("Preço: "))
            const novoBrinquedo = new Brinquedo(nomeBrinquedo, idadeMinima, precoBrinquedo)
            estoqueBrinqudo.adicionar(novoBrinquedo)
}
function adicionarEletronico(){
    let modelo = readlineSync.question("Modelo: ")
            let marca = readlineSync.question("Marca: ")
            let precoEletronico = Number(readlineSync.question("Preço: "))
            const novoEletronico = new Eletronico (modelo, marca, precoEletronico)
            estoqueEletronico.adicionar(novoEletronico)
}