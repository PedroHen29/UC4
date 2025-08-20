"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const ContaPoupanca_1 = require("./ContaPoupanca");
const Guerreiro_1 = require("./Guerreiro");
const heroi = new Guerreiro_1.Guerreiro(100);
const vilao = new Guerreiro_1.Guerreiro(100);
heroi.atacar(vilao); // Atacando outro personagem (usa método público que chama protected)
heroi.treinar(); // Acessando protected na própria instância
const car = new Carro_1.Carro(50);
car.acelerar();
const minhaConta = new ContaPoupanca_1.ContaPoupanca(100);
minhaConta.aplicarJuros();
