export class Dog {
    // Atributos Cachorro
    name:string
    weigth:number
    breed:string

    // O constructor é um metodo chamado automaticamante quando criamos um objeto a partir dessa classe. Nele, normalmente, vamos passar valores para os atributos
    constructor(dogName:string, dogWeight:number, dogBreed:string){
        this.name = dogName
        this.weigth = dogWeight
        this.breed = dogBreed
    }

    bark(): void {
        console.log(`${this.name} is barking.`)
    }

    eat(): void{
        console.log(`The${this.breed} is eating.`)
    }
}