"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numero = void 0;
let numero = 100;
class Numero {
    numeroAleatorio() {
        return Math.floor(Math.random() * 100) + 1;
    }
}
exports.Numero = Numero;
