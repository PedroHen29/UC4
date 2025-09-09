"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Administrador_1 = require("./Administrador");
const Cliente_1 = require("./Cliente");
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
forma.forEach(formas => {
    console.log(formas.calcularArea());
});
//--------------------------------------------------------------------------------
const administrador = new Administrador_1.Administrador("Pedro");
const cliente = new Cliente_1.Cliente("Erik");
administrador.autenticar("Administrador", "Admin123");
cliente.autenticar("Cliente", "Cli1234");
const ClaAkimichi_1 = require("./ClaAkimichi");
const ClaHyuuga_1 = require("./ClaHyuuga");
const ClaNara_1 = require("./ClaNara");
const ClaUchiha_1 = require("./ClaUchiha");
const ClaInuzuka_1 = require("./ClaInuzuka");
const personagemUchiha = new ClaUchiha_1.ClaUchiha("Uchiha", "Sasuke");
const personagemHyuuga = new ClaHyuuga_1.ClaHyuuga("Hyuuga", "Hiashi");
const personagemNara = new ClaNara_1.ClaNara("Nara", "Shikamaru");
const personagemAkimichi = new ClaAkimichi_1.ClaAkimichi("Akimichi", "Chouza");
const personagemInuzuke = new ClaInuzuka_1.ClaInuzuka("Inuzuka", "...");
personagemUchiha.habilidadeEspecial();
personagemHyuuga.ataqueEspecial();
