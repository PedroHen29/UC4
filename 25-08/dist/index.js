"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Numero_1 = require("./Numero");
const chalk_1 = __importDefault(require("chalk"));
const readline = __importStar(require("readline-sync"));
const numero = new Numero_1.Numero();
let numeroaleatorio = numero.numeroAleatorio();
console.log(numeroaleatorio);
let i = 0;
console.log(`
    Bem-vindo(a) ao Jogo de Adivinhação!
    Tente advinhar o número entre 1 e 100
`);
let opcao = 0;
do {
    i = i + 1;
    opcao = Number(readline.question("Digite seu palpite: "));
    if (opcao < numeroaleatorio) {
        console.log(chalk_1.default.bold.redBright("    Muito baixo! "));
    }
    else if (opcao > numeroaleatorio) {
        console.log(chalk_1.default.bold.greenBright("    Muito alto! "));
    }
    else if (opcao === numeroaleatorio) {
        console.log(chalk_1.default.bold.blueBright(`Parabens! Você acertou o numero ${numeroaleatorio} em ${i} tentativa(s)!)`));
    }
} while (opcao != numeroaleatorio);
