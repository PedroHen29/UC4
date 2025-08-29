import { Circulo } from "./Circulo";
import { IFuncionario } from "./IFuncionario";
import { ILivro } from "./ILivro";
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";
import { Quadrado } from "./Quadrado";
import { Sistemalogin } from "./Sistemalogin";
// Aqui criamos um obejto do tipo IUsuario, ou seja, um objeto que SEGUE AS REGRAS da interface que criamos
const meuUsuario:IUsuario = {
    nome: "Pedro",
    idade: 15
}
// Interface podem ser usadas para tipar parâmetros de função 
// Assim garanto que o objeto que eu usar terá tudo que eu preciso
function mostrarProduto(produto:IProduto):void{
    console.log(`${produto.nome} custa R$ ${produto.preco}`)
}

const produto:IProduto = {
    nome: "Camisate",
    preco: 99.99
}
mostrarProduto(produto)
mostrarProduto({nome:"Tenis", preco: 120.00})

const livro1:ILivro = {
    titulo:"Harry potter",
    autor: "JK Rooling",
    anoPublicado: 2000,
    disponivel: true

}
function mostrarLivro(livro:ILivro){
    console.log(`
    Titulo: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de publicação: ${livro.anoPublicado}
    Disponivel: ${livro.disponivel}

    `)
}
mostrarLivro(livro1)
const funcionario1:IFuncionario ={
    nome:"Pedro",
    cargo: "Faxineiro",
    salario: 1300
}
function calcularBonos(funcionario:IFuncionario){
    let bonus = funcionario.salario*0.10
    console.log(`O salario do funcionario é de R$${funcionario.salario+bonus}`)
}
calcularBonos(funcionario1)

const meuQuadrado:Quadrado = new Quadrado(4)
const meuCirculo:Circulo = new Circulo(10)

console.log(`A area do quadrado é ${meuQuadrado.calcularArea()}`)
console.log(`A area do circulo é de ${meuCirculo.calcularArea()}`)

const usuario:Sistemalogin = new Sistemalogin()
console.log(usuario.autenticar("admin", 1234))
console.log(usuario.autenticar("nimda", 4321))