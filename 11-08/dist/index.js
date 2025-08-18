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
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
let opcao = "";
let numero = 0;
let numero2 = 0;
do {
    console.log("=== CALCULADORA");
    console.log("1 - Somar");
    console.log("2 - Subtrair");
    console.log("3 - Multiplicar");
    console.log("4 - Dividir");
    console.log("5 - Sair");
    opcao = readline.question("Escolha uma opcao: ");
    switch (opcao) {
        case "1":
            numero = Number(readline.question("Escolha o primeiro numero: "));
            numero2 = Number(readline.question("Escolha o segundo numero: "));
            console.log(soma(numero, numero2));
            break;
        case "2":
            numero = Number(readline.question("Escolha o primeiro numero: "));
            numero2 = Number(readline.question("Escolha o segundo numero: "));
            console.log(subtrair(numero, numero2));
            break;
        case "3":
            numero = Number(readline.question("Escolha o primeiro numero: "));
            numero2 = Number(readline.question("Escolha o segundo numero: "));
            console.log(multiplicar(numero, numero2));
            break;
        case "4":
            numero = Number(readline.question("Escolha o primeiro numero: "));
            numero2 = Number(readline.question("Escolha o segundo numero: "));
            dividir(numero, numero2);
            break;
        case "5":
            console.log("Saindo");
            break;
        default:
            console.log("Opcao invalida");
    }
    function soma(numero, numero2) {
        return numero + numero2;
    }
    function subtrair(numero, numero2) {
        return numero - numero2;
    }
    function multiplicar(numero, numero2) {
        return numero * numero2;
    }
    function dividir(numero, numero2) {
        if (numero2 === 0) {
            console.log("Operação invalida");
        }
        else {
            console.log(numero / numero2);
        }
    }
} while (opcao !== "5");
