"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaInuzuka = void 0;
const chalk_1 = __importDefault(require("chalk"));
const Cla_1 = require("./Cla");
class ClaInuzuka extends Cla_1.Cla {
    constructor(nomedoCla, lider) {
        super(nomedoCla, lider);
    }
    habilidadeEspecial() {
        console.log(chalk_1.default.bold.bgMagentaBright(`
        O Clã Inuzuka tem como habilidade especial a parceria com cães ninjas (ninken) e o uso de técnicas de combate baseadas em olfato aguçado e trabalho em dupla com seus companheiros caninos.
        `));
    }
    exibirDetalhes() {
        console.log(`
        Clã: Inuzuke
        Lider: Desconhecido
        `);
    }
    ataqueEspecial() {
        console.log(chalk_1.default.bold.bgMagentaBright(`
        O Clã Inuzuka usa técnicas de combate junto com seus cães, combinando velocidade e força. Seus ataques giratórios, como o Gatsūga, causam grandes danos. Eles também usam o olfato aguçado para rastrear inimigos.
        `));
    }
}
exports.ClaInuzuka = ClaInuzuka;
