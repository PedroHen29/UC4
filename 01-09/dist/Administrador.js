"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrador = void 0;
const UsuarioSistema_1 = require("./UsuarioSistema");
class Administrador extends UsuarioSistema_1.UsuarioSistemas {
    constructor(nome) {
        super(nome);
    }
    acessarPainel() {
        console.log("Painel do Administrador");
    }
    autenticar(usuario, senha) {
        if (usuario === "Administrador" && senha === "Admin123") {
            this.acessarPainel();
            return true;
        }
        else {
            console.log("Login não validado");
            return false;
        }
    }
}
exports.Administrador = Administrador;
