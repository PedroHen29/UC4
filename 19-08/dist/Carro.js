"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const Veiculo_1 = require("./Veiculo");
class Carro extends Veiculo_1.Veiculo {
    constructor(velocidade) {
        super(velocidade);
    }
    acelerar() {
        let a = this.velocidade + 20;
        console.log(`O carro está a ${a} Km`);
    }
}
exports.Carro = Carro;
