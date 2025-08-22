"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boleto = void 0;
const Pagamento_1 = require("./Pagamento");
class Boleto extends Pagamento_1.Pagamento {
    processar() {
        console.log(`Pagamento realizado com Boleto`);
    }
}
exports.Boleto = Boleto;
