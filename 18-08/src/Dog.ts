import { Animal } from "./Animal";
// Usamos a palavra reservada "extends" para identificar que uma classe é filha de outra
export class Dog extends Animal{
    // Dog, como é filho da classe Animal, já erda os atributos "name" e "weight"

    constructor(name:string, weight:number){
        super(name,weight)
    }
}