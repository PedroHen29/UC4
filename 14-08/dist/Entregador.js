"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entregador = void 0;
class Entregador {
    constructor(nome) {
        this.nome = nome;
    }
    //
    entregarPacote(pacote) {
        console.log(`${this.nome} está entegando um pacote de ${pacote.getPeso()}Kg para ${pacote.getDestino()}`);
    }
    // Método que recebe um objeto do tipo Pacote e altera sua propriedade
    trocarEndereco(pacote, novoEndereco) {
        pacote.setDestino(novoEndereco);
        console.log(`O novo endereço é ${novoEndereco}.`);
    }
}
exports.Entregador = Entregador;
