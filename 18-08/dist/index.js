"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crocodile_1 = require("./Crocodile");
const Dog_1 = require("./Dog");
const Owl_1 = require("./Owl");
// assim que eu crio um objeto do tipo cachorro
const myDog = new Dog_1.Dog("Bob", 10);
// assim eu vejo o nome do cachorro
console.log(myDog.name);
// assim eu vejo o peso do cachorro
console.log(myDog.weight);
// assim que eu chamo os dois metodos
myDog.bark();
myDog.eat();
const myOwl = new Owl_1.Owl("Sla", 2);
myOwl.fly();
myOwl.eat();
const crocodilo = new Crocodile_1.Crocodile("Totodile", 500);
crocodilo.eat();
crocodilo.swim();
let animais = [crocodilo, myOwl, myDog];
for (let i = 0; i < animais.length; i++) {
    animais[i].eat();
}
