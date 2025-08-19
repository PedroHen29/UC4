"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crocodile = void 0;
const Animal_1 = require("./Animal");
class Crocodile extends Animal_1.Animal {
    constructor(name, weight) {
        super(name, weight);
    }
    swim() {
        console.log(`${this.name} is swimming`);
    }
}
exports.Crocodile = Crocodile;
