import { Dog } from "./Dog"

// String
let nome: string = "Pedro"
// Number
let idade: number = 15
// Boolean
let deMaior:boolean = false

//-----------------------------------------------------------------------------
// Arrays

let numeros: Array<number> = [1,2,3]
let nomes: string[] = ['Leo', 'Pedro', 'Ana']

//Objeto
let pessoa: {nome: string, idade: number} = 
{
    nome:"Pedro",
    idade:15
}

//------------------------------------------------------------------------

function calcula(num:number, num2:number):number {
    return num + num2
}

function mensagem(meuNome:string):string {
    return `ola ${meuNome}, tudo bem`
}
function frase():void {
    console.log("e ae")
}

// Função com parametros opcionais
function sayHello(nome?:string):void {
    console.log("Hello,", nome || "World")
}

sayHello()
sayHello("Pedro")

function applyDiscount(price:number, discount:number = 0.05):number {
    return price * (1 - discount)
}
console.log(
    applyDiscount(100),
    applyDiscount(100,0.9)
)

// Crio objetos a partir da classe Dog
let myDog:Dog = new Dog("Bob",25,"Golden-Retriever")
let mYOtherDog:Dog = new Dog("Fido",5,"Vira-Lata")

// Assim eu acesso os atributos
console.log(myDog.breed) //Golden-Retriever
console.log(mYOtherDog.name)// Fido

// Assim eu chamo os metodos
myDog.bark()
mYOtherDog.eat()