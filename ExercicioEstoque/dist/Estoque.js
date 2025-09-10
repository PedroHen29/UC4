"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    constructor() {
        this.itens = [];
    }
    adicionar(item) {
        this.itens.push(item);
    }
    listar() {
        return this.itens;
    }
    remover(indice) {
        return this.itens.splice(indice, 1);
    }
    buscar(condicao) {
        return this.itens;
    }
}
exports.Estoque = Estoque;
