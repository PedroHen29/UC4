"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaAkimichi = void 0;
const Cla_1 = require("./Cla");
const chalk_1 = __importDefault(require("chalk"));
class ClaAkimichi extends Cla_1.Cla {
    constructor(nomedoCla, lider) {
        super(nomedoCla, lider);
    }
    habilidadeEspecial() {
        console.log(chalk_1.default.bold.yellowBright(`
        A ampliação corporal é a habilidade especial do clã Akimichi no anime Naruto. Ela permite aumentar partes do corpo ou o corpo inteiro para ganhar força e alcance. Essa técnica consome muita energia, mas é poderosa em combate físico.
        `));
    }
    exibirDetalhes() {
        console.log(`
        Clã: Akimichi
        Lider: Chouza
        `);
    }
    ataqueEspecial() {
        console.log(chalk_1.default.bold.yellowBright(`
        O clã Akimichi usa o Baika no Jutsu para aumentar o corpo e esmagar o inimigo com ataques gigantescos.
        `));
    }
}
exports.ClaAkimichi = ClaAkimichi;
