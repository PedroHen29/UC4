"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaNara = void 0;
const Cla_1 = require("./Cla");
const chalk_1 = __importDefault(require("chalk"));
class ClaNara extends Cla_1.Cla {
    constructor(nomedoCla, lider) {
        super(nomedoCla, lider);
    }
    habilidadeEspecial() {
        console.log(chalk_1.default.bold.greenBright(`
        A manipulação de sombras é a habilidade especial do clã Nara no anime Naruto. Ela permite controlar a própria sombra para prender e imobilizar inimigos. Quando presos, os alvos imitam os movimentos do usuário.
        `));
    }
    exibirDetalhes() {
        console.log(`
        Clã: Nara
        Lider: Shikamaru
        `);
    }
    ataqueEspecial() {
        console.log(chalk_1.default.bold.greenBright(`
        O clã Nara usa sombras para imobilizar e controlar os inimigos, copiando seus movimentos com precisão estratégica.
        `));
    }
}
exports.ClaNara = ClaNara;
