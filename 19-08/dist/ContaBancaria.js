"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }
    atualizarSaldo(valor) {
        this.saldo += valor;
    }
}
exports.ContaBancaria = ContaBancaria;
