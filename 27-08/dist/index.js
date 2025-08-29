"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circulo_1 = require("./Circulo");
const Quadrado_1 = require("./Quadrado");
const Sistemalogin_1 = require("./Sistemalogin");
// Aqui criamos um obejto do tipo IUsuario, ou seja, um objeto que SEGUE AS REGRAS da interface que criamos
const meuUsuario = {
    nome: "Pedro",
    idade: 15
};
// Interface podem ser usadas para tipar parâmetros de função 
// Assim garanto que o objeto que eu usar terá tudo que eu preciso
function mostrarProduto(produto) {
    console.log(`${produto.nome} custa R$ ${produto.preco}`);
}
const produto = {
    nome: "Camisate",
    preco: 99.99
};
mostrarProduto(produto);
mostrarProduto({ nome: "Tenis", preco: 120.00 });
const livro1 = {
    titulo: "Harry potter",
    autor: "JK Rooling",
    anoPublicado: 2000,
    disponivel: true
};
function mostrarLivro(livro) {
    console.log(`
    Titulo: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de publicação: ${livro.anoPublicado}
    Disponivel: ${livro.disponivel}

    `);
}
mostrarLivro(livro1);
const funcionario1 = {
    nome: "Pedro",
    cargo: "Faxineiro",
    salario: 1300
};
function calcularBonos(funcionario) {
    let bonus = funcionario.salario * 0.10;
    console.log(`O salario do funcionario é de R$${funcionario.salario + bonus}`);
}
calcularBonos(funcionario1);
const meuQuadrado = new Quadrado_1.Quadrado(4);
const meuCirculo = new Circulo_1.Circulo(10);
console.log(`A area do quadrado é ${meuQuadrado.calcularArea()}`);
console.log(`A area do circulo é de ${meuCirculo.calcularArea()}`);
const usuario = new Sistemalogin_1.Sistemalogin();
console.log(usuario.autenticar("admin", 1234));
console.log(usuario.autenticar("nimda", 4321));
