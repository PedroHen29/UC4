"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Livro_1 = require("./Livro");
const Estoque_1 = require("./Estoque");
const Roupa_1 = require("./Roupa");
const Brinquedo_1 = require("./Brinquedo");
const Eletronico_1 = require("./Eletronico");
console.log("Hello TypeScript!");
const estoqueLivros = new Estoque_1.Estoque();
const estoqueRoupa = new Estoque_1.Estoque();
const estoqueBrinqudo = new Estoque_1.Estoque();
const estoqueEletronico = new Estoque_1.Estoque();
let opcao = "";
do {
    console.log(`
    1- Cadastrar produto
    2- Listar produtos
    3- Remover produto
    4- Buscas produto
    5- Sair
`);
    opcao = readline_sync_1.default.question("Qual operação você deseja realizar? ");
    switch (opcao) {
        case "1":
            let produto = readline_sync_1.default.question("Qual produto você deseja adicionar? ");
            if (produto === "Livro") {
                adicionarLivro();
            }
            else if (produto === "Roupa") {
                adicionarRoupa();
            }
            else if (produto === "Brinquedo") {
                adicionarBrinquedo();
            }
            else if (produto === "Eletronico") {
                adicionarEletronico();
            }
            else {
                console.log("❌ Tipo de produto invalido! Tente outro.");
            }
            break;
        case "2":
            console.log(estoqueLivros.listar());
            console.log(estoqueRoupa.listar());
            console.log(estoqueBrinqudo.listar());
            console.log(estoqueEletronico.listar());
            break;
        case "3":
            let pergunta = readline_sync_1.default.question("Qual é o nome do produto que você deseja remover? ");
            let indice = Number(readline_sync_1.default.question("Digite o numero desejado: "));
            if (pergunta === "Livro") {
                estoqueLivros.remover(indice);
                console.log(estoqueLivros.listar());
            }
            else if (pergunta === "Roupa") {
                estoqueRoupa.remover(indice);
                console.log(estoqueRoupa.listar());
            }
            else if (pergunta === "Brinquedo") {
                estoqueBrinqudo.remover(indice);
                console.log(estoqueBrinqudo.listar());
            }
            else if (pergunta === "Eletronico") {
                estoqueEletronico.remover(indice);
                console.log(estoqueEletronico.listar());
            }
            break;
        case "4":
            break;
        case "5":
            console.log("Saindo do sistema, até mais...");
    }
} while (opcao != "5");
function adicionarLivro() {
    let tituloLivro = readline_sync_1.default.question("Titulo: ");
    let autorLivro = readline_sync_1.default.question("Autor: ");
    let precoLivro = Number(readline_sync_1.default.question("Preço: "));
    const novoLivro = new Livro_1.Livro(tituloLivro, autorLivro, precoLivro);
    estoqueLivros.adicionar(novoLivro);
}
function adicionarRoupa() {
    let descricaoRoupa = readline_sync_1.default.question("Descrição: ");
    let tamanhoRoupa = readline_sync_1.default.question("Tamanho: ");
    let precoRoupa = Number(readline_sync_1.default.question("Preço: "));
    const novaRoupa = new Roupa_1.Roupa(descricaoRoupa, tamanhoRoupa, precoRoupa);
    estoqueRoupa.adicionar(novaRoupa);
}
function adicionarBrinquedo() {
    let nomeBrinquedo = readline_sync_1.default.question("Nome: ");
    let idadeMinima = Number(readline_sync_1.default.question("Idade Minima: "));
    let precoBrinquedo = Number(readline_sync_1.default.question("Preço: "));
    const novoBrinquedo = new Brinquedo_1.Brinquedo(nomeBrinquedo, idadeMinima, precoBrinquedo);
    estoqueBrinqudo.adicionar(novoBrinquedo);
}
function adicionarEletronico() {
    let modelo = readline_sync_1.default.question("Modelo: ");
    let marca = readline_sync_1.default.question("Marca: ");
    let precoEletronico = Number(readline_sync_1.default.question("Preço: "));
    const novoEletronico = new Eletronico_1.Eletronico(modelo, marca, precoEletronico);
    estoqueEletronico.adicionar(novoEletronico);
}
