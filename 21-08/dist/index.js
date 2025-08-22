"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bicicleta_1 = require("./Bicicleta");
const Boleto_1 = require("./Boleto");
const Cachorro_1 = require("./Cachorro");
const Carro_1 = require("./Carro");
const CartaoCredito_1 = require("./CartaoCredito");
const Gato_1 = require("./Gato");
const Pagamento_1 = require("./Pagamento");
const Veiculo_1 = require("./Veiculo");
const meuAnimal = new Cachorro_1.Cachorro();
const outroAnimal = new Gato_1.Gato();
meuAnimal.falar();
outroAnimal.falar();
const veiculos = [new Veiculo_1.Veiculo(), new Carro_1.Carro(), new Bicicleta_1.Bicicleta()];
veiculos.forEach(veiculo => {
    veiculo.mover();
});
const pagamentos = [new CartaoCredito_1.CartaoCredito(), new Boleto_1.Boleto(), new Pagamento_1.Pagamento()];
pagamentos.forEach(formaPagemento => {
    formaPagemento.processar();
});
