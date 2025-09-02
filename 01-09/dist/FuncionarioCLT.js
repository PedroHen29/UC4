"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioCLT = void 0;
const Funcionario_1 = require("./Funcionario");
class FuncionarioCLT extends Funcionario_1.Funcionario {
    constructor(nome, salario) {
        super(nome);
        this.salario = salario;
    }
    calcularSalario() {
        console.log(this.salario);
    }
}
exports.FuncionarioCLT = FuncionarioCLT;
