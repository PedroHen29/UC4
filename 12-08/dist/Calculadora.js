"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(numeroUm, numeroDois) {
        this.numeroUm = numeroUm;
        this.numeroDois = numeroDois;
    }
    somar() {
        return this.numeroUm + this.numeroDois;
    }
    subtrair() {
        return this.numeroUm - this.numeroDois;
    }
    multiplicar() {
        return this.numeroUm * this.numeroDois;
    }
    dividir() {
        return this.numeroUm / this.numeroDois;
    }
}
exports.Calculadora = Calculadora;
