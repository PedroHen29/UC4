"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const ContaBancaria_1 = require("./ContaBancaria");
class ContaPoupanca extends ContaBancaria_1.ContaBancaria {
    constructor(saldo) {
        super(saldo);
    }
    aplicarJuros() {
        this.atualizarSaldo(10);
        console.log(`seu saldo é de ${this.saldo * 0.5}`);
    }
}
exports.ContaPoupanca = ContaPoupanca;
