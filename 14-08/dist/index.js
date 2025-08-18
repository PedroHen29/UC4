"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entregador_1 = require("./Entregador");
const Pacote_1 = require("./Pacote");
/*
const pessoaNum1:Pessoa = new Pessoa ("Pedro", 15)
console.log(pessoaNum1.apresentar())


console.log(pessoaNum1.getNome())
pessoaNum1.setNome("Pedro Henrique")
console.log(pessoaNum1.getNome())

pessoaNum1.setIdade(-20)
*/
const entregador = new Entregador_1.Entregador("Messi");
const pacote = new Pacote_1.Pacote("Novo Hamburgo", 5);
entregador.trocarEndereco(pacote, "São Leopoldo");
entregador.entregarPacote(pacote);
