import { Dog } from "./Dog";
import { Owl } from "./Owl";

const myDog:Dog = new Dog ("Bob", 10)

console.log(myDog.name)
console.log(myDog.weight)
myDog.bark()
myDog.eat()

const myOwl:Owl = new Owl ("Sla", 2)