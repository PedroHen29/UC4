"use strict";
// IF e ELSE IF
/*const idade = 0;
const temCarteira = false
if(idade >= 18 && temCarteira){
    console.log("Você pode dirigir.")
}else if(idade >= 18 && !temCarteira){
    console.log("Você é de maior, mas não tem carteira. Não pode dirigir")
}
else {
    console.log("Você é menor de idade")
}

// OPERADOR TERNARIO
const pontuacao = 85
const resultado = pontuacao >= 65 ? "Aprovado" : "Reprovado";
console.log(resultado)

// SWITCH

let fruta = "banana"

switch(fruta) {
    case "maca":
        console.log("maca")
    break
    case "pera":
        console.log("pera")
    break
    case "laranja":
        console.log("laranja")
    break
    case "banana":
        console.log("Banana")
    break
    default:
        console.log("Hamburguer")
}

// MENU COM SWITCH

import * as redline from 'readline-sync';

console.log("=== MENU PRINCIPAL ===");
console.log("1 - Ola");
console.log("2 - Sobre");
console.log("3 - Sair")
// Questione uma função pronta da biblioteca readline-sync
// ela imprime no terminal o que pedirmos, e espere o usuario digitar algo
// quando ele digita, a variavel opção recebe como como valor o que o usuario digitou
const opcaos = redline.question("Escolha uma opção: ")
switch (opcaos) {
    
    case "1":
        console.log("Ola, seja bem vindo")
    break
    case "2":
        console.log("Sobre sla oq")
    break
    case "3":
        console.log("Sair do aplicativo")
    break
}
*/
// EXERCICIOS
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
//1
const redline = __importStar(require("readline-sync"));
let chuva = false;
if (chuva === false) {
    console.log("Levar guarda-chuva");
}
else {
    console.log("Esta um otimo dia para caminhar");
}
//2
let nota = 8;
let resultadO = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(resultadO);
//3
let animal = "Cachorro";
switch (animal) {
    case "Cachorro":
        console.log("Au au");
        break;
    case "Gato":
        console.log("Miau");
        break;
    default:
        console.log("Desconhecido");
}
//4
let opcao = "";
do {
    console.log("=== MENU ===");
    console.log("1 - Jogar");
    console.log("2 Carrgar jogo");
    console.log("3 - Sair");
    opcao = redline.question("Escolha uma opcao: ");
    switch (opcao) {
        case "1":
            console.log("Jogar");
            break;
        case "2":
            console.log("Carregando");
            break;
        case "3":
            console.log("Saindo");
            break;
        default:
            console.log("Opcao invalida. Tente de novo");
    }
} while (opcao !== "3");
