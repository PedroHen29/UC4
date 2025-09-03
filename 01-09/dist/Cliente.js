"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const UsuarioSistema_1 = require("./UsuarioSistema");
class Cliente extends UsuarioSistema_1.UsuarioSistemas {
    constructor(nome) {
        super(nome);
    }
    acessarPainel() {
        console.log("Painel do Cliente");
    }
    autenticar(usuario, senha) {
        if (usuario === "Cliente" && senha === "Cli123") {
            this.acessarPainel();
            return true;
        }
        else {
            console.log("Login não validado");
            return false;
        }
    }
}
exports.Cliente = Cliente;
