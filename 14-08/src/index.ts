import { Entregador } from "./Entregador";
import { Pacote } from "./Pacote";
import { Pessoa } from "./Pessoa";
/*
const pessoaNum1:Pessoa = new Pessoa ("Pedro", 15)
console.log(pessoaNum1.apresentar())


console.log(pessoaNum1.getNome())
pessoaNum1.setNome("Pedro Henrique")
console.log(pessoaNum1.getNome())

pessoaNum1.setIdade(-20)
*/
const entregador:Entregador = new Entregador("Messi")
const pacote:Pacote = new Pacote("Novo Hamburgo", 5)

entregador.trocarEndereco(pacote,"São Leopoldo")
entregador.entregarPacote(pacote)
