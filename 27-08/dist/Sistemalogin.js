"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sistemalogin = void 0;
class Sistemalogin {
    autenticar(usuario, senha) {
        if (usuario === "admin" && senha === 1234) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Sistemalogin = Sistemalogin;
