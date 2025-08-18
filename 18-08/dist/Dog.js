"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
// Usamos a palavra reservada "extends" para identificar que uma classe é filha de outra
class Dog extends Animal_1.Animal {
    // Dog, como é filho da classe Animal, já erda os atributos "name" e "weight"
    constructor(name, weight) {
        // o método "super()" chama o construtor da classe pai
        // assim, reutilizamos ele na classe filha
        super(name, weight);
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
}
exports.Dog = Dog;
