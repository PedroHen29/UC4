import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";
// assim que eu crio um objeto do tipo cachorro

const myDog:Dog = new Dog ("Bob", 10)

// assim eu vejo o nome do cachorro
console.log(myDog.name)
// assim eu vejo o peso do cachorro
console.log(myDog.weight)
// assim que eu chamo os dois metodos
myDog.bark()
myDog.eat()

const myOwl:Owl = new Owl ("Sla", 2)
myOwl.fly()
myOwl.eat()

const crocodilo:Crocodile = new Crocodile("Totodile", 500)
crocodilo.eat()
crocodilo.swim()

let animais:Animal[] = [crocodilo,myOwl,myDog]
for(let i = 0; i < animais.length; i++){
    animais[i].eat()
}