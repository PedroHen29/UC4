"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaUchiha = void 0;
const Cla_1 = require("./Cla");
const chalk_1 = __importDefault(require("chalk"));
class ClaUchiha extends Cla_1.Cla {
    constructor(nomedoCla, lider) {
        super(nomedoCla, lider);
    }
    habilidadeEspecial() {
        console.log(chalk_1.default.bold.redBright("O Sharingan é uma habilidade ocular do clã Uchiha no anime Naruto. Ele permite ver movimentos com precisão, copiar jutsus e usar ilusões poderosas. Em formas avançadas, concede técnicas ainda mais fortes como o Amaterasu e o Susanoo."));
    }
    exibirDetalhes() {
        console.log(`
        Clã: Uchiha
        Lider: Sasuke

        `);
    }
    ataqueEspecial() {
        console.log(chalk_1.default.bold.redBright(`
        O clã Uchiha usa o Sharingan para lançar ataques como o Amaterasu, queimando inimigos com chamas negras impossíveis de apagar.
        `));
    }
}
exports.ClaUchiha = ClaUchiha;
