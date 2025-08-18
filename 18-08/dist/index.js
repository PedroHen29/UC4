"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const myDog = new Dog_1.Dog("Bob", 10);
console.log(myDog.name);
console.log(myDog.weight);
myDog.bark();
myDog.eat();
