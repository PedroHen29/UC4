"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = require("./Cachorro");
const Calculadora_1 = require("./Calculadora");
// Para poder crias um objeto da nossa classe chmado "Cahorro", primeiro criamos uma variável do mesmo nome.
// Depois, atribuimos valor a esta variavel usando a palavra reservada "new" seguida do nome da classe junto de parênteses. Assim chamamos o contrutor de classe e devemos, dentro dos parênteses, passar TODOS os valores que nós definimos
// Quando criamos um objeto, chamamos isso de INSTANCIAR O OBJETO DA CLASSE
const meuCachorro = new Cachorro_1.Cachorro("Toto", "Vira-Lata", 5);
const outroCachorro = new Cachorro_1.Cachorro("Princesa", "Pitbull", 4);
// Para chamar os métodos destes objetos, chamamos o nome da variável + . + o nome do método + ()
outroCachorro.latir();
meuCachorro.correr();
// Para acessarmos o valor do atributo de um objeto, chamamos o nome da variável + . o nome do atributo
console.log(outroCachorro.idade);
// Para mudarmos o valor do atributo de um objeto, chamamos o nome da variável + . + o nome do atributo, depois "=" e passamos o novo valor
meuCachorro.nome = "Tobby";
console.log(meuCachorro.nome);
const minhaCalculadora = new Calculadora_1.Calculadora(5, 5);
console.log(minhaCalculadora.somar());
console.log(minhaCalculadora.subtrair());
console.log(minhaCalculadora.multiplicar());
console.log(minhaCalculadora.dividir());
