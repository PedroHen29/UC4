"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoCredito = void 0;
const Pagamento_1 = require("./Pagamento");
class CartaoCredito extends Pagamento_1.Pagamento {
    processar() {
        console.log(`Pagamento realizado com Cartão de Credito`);
    }
}
exports.CartaoCredito = CartaoCredito;
