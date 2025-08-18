"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Ola, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
    // Getter - Método que "pega" o valor
    getNome() {
        return this.nome;
    }
    // Sttter - Método que "define" o valor
    setNome(novoNome) {
        // O atributo nome vai receber um novo valor
        this.nome = novoNome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(novaIdade) {
        if (novaIdade >= 0) {
            this.idade = novaIdade;
        }
        else {
            console.log("Erro, este numero não pode ser menor que 0");
        }
    }
}
exports.Pessoa = Pessoa;
