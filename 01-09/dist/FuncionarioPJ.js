"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioPJ = void 0;
const chalk_1 = __importDefault(require("chalk"));
const Funcionario_1 = require("./Funcionario");
class FuncionarioPJ extends Funcionario_1.Funcionario {
    constructor(nome, salario) {
        super(nome);
        this.salario = salario;
    }
    calcularSalario() {
        console.log(chalk_1.default.bold.greenBright(`O salario do funcionario PJ é de R$${this.salario * 220}`));
    }
}
exports.FuncionarioPJ = FuncionarioPJ;
