"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FuncionarioCLT_1 = require("./FuncionarioCLT");
const FuncionarioPJ_1 = require("./FuncionarioPJ");
const Retangulo_1 = require("./Retangulo");
const Triangulo_1 = require("./Triangulo");
const funcionarioCLT = new FuncionarioCLT_1.FuncionarioCLT("sla", 1330);
const funcionarioPJ = new FuncionarioPJ_1.FuncionarioPJ("sla", 12.59);
funcionarioCLT.calcularSalario();
funcionarioPJ.calcularSalario();
//-------------------------------------------------------------------------------
const forma = [new Retangulo_1.Retangulo(10, 5), new Triangulo_1.Triangulo(10, 5)];
forma.forEach(fromas => {
    console.log(fromas.calcularArea());
});
