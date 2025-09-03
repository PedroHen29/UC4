"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaHyuuga = void 0;
const Cla_1 = require("./Cla");
const chalk_1 = __importDefault(require("chalk"));
class ClaHyuuga extends Cla_1.Cla {
    constructor(nomedoCla, lider) {
        super(nomedoCla, lider);
    }
    habilidadeEspecial() {
        console.log(chalk_1.default.bold.cyanBright(`
        O Byakugan é uma habilidade ocular do clã Hyuuga no anime Naruto. Ele permite visão de quase 360°, enxergar através de objetos e ver o fluxo de chakra. É usado junto com o estilo de luta Gentle Fist para atacar os pontos de chakra do inimigo.
        `));
    }
    exibirDetalhes() {
        console.log(`
        Clã: Hyuuga
        Lider: Hiashi
        `);
    }
    ataqueEspecial() {
        console.log(chalk_1.default.bold.cyanBright(`
        O clã Hyuuga usa o Jūken para golpear pontos de chakra e desativar o fluxo de energia do inimigo com precisão letal.
        `));
    }
}
exports.ClaHyuuga = ClaHyuuga;
