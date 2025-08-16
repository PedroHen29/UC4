"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pacote = void 0;
class Pacote {
    constructor(destino, peso) {
        this.destino = destino;
        this.peso = peso;
    }
    getDestino() {
        return this.destino;
    }
    setDestino(novoDestino) {
        this.destino = novoDestino;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(novoPeso) {
        this.peso = novoPeso;
    }
}
exports.Pacote = Pacote;
