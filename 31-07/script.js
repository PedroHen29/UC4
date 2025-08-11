"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
// String
var nome = "Pedro";
// Number
var idade = 15;
// Boolean
var deMaior = false;
//-----------------------------------------------------------------------------
// Arrays
var numeros = [1, 2, 3];
var nomes = ['Leo', 'Pedro', 'Ana'];
//Objeto
var pessoa = {
    nome: "Pedro",
    idade: 15
};
//------------------------------------------------------------------------
function calcula(num, num2) {
    return num + num2;
}
function mensagem(meuNome) {
    return "ola ".concat(meuNome, ", tudo bem");
}
function frase() {
    console.log("e ae");
}
// Função com parametros opcionais
function sayHello(nome) {
    console.log("Hello,", nome || "World");
}
sayHello();
sayHello("Pedro");
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100), applyDiscount(100, 0.9));
// Crio objetos a partir da classe Dog
var myDog = new Dog_1.Dog("Bob", 25, "Golden-Retriever");
var mYOtherDog = new Dog_1.Dog("Fido", 5, "Vira-Lata");
// Assim eu acesso os atributos
console.log(myDog.breed); //Golden-Retriever
console.log(mYOtherDog.name); // Fido
// Assim eu chamo os metodos
myDog.bark();
mYOtherDog.eat();
