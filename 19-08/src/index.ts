import { Carro } from "./Carro";
import { ContaBancaria } from "./ContaBancaria";
import { ContaPoupanca } from "./ContaPoupanca";
import { Guerreiro } from "./Guerreiro";
import { Personagem } from "./Personagem";

const heroi:Guerreiro = new Guerreiro(100)
const vilao:Guerreiro = new Guerreiro(100)

heroi.atacar(vilao);  // Atacando outro personagem (usa método público que chama protected)
heroi.treinar();       // Acessando protected na própria instância

const car:Carro = new Carro (50)
car.acelerar()

const minhaConta:ContaPoupanca = new ContaPoupanca (100)
minhaConta.aplicarJuros()
