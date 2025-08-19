"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owl = void 0;
const Animal_1 = require("./Animal");
class Owl extends Animal_1.Animal {
    constructor(name, weigth) {
        super(name, weigth);
    }
    fly() {
        console.log(`${this.name} is flying`);
    }
}
exports.Owl = Owl;
