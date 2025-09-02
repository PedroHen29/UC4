"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioPJ = void 0;
const Funcionario_1 = require("./Funcionario");
class FuncionarioPJ extends Funcionario_1.Funcionario {
    constructor(nome, salario) {
        super(nome);
        this.salario = salario;
    }
    calcularSalario() {
        this.salario * 220;
        console.log(this.salario);
    }
}
exports.FuncionarioPJ = FuncionarioPJ;
