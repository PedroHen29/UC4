"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        let a = this.raio * this.raio;
        return 3.14 * a;
    }
}
exports.Circulo = Circulo;
