import * as readline from 'readline-sync';

let opcao:string = ""
let numero = 0
let numero2 = 0
do{
    console.log("=== CALCULADORA")
    console.log("1 - Somar")
    console.log("2 - Subtrair")
    console.log("3 - Multiplicar")
    console.log("4 - Dividir")
    console.log("5 - Sair")
    opcao = readline.question("Escolha uma opcao: ")
    
    switch(opcao){
        case "1":
            numero = Number(readline.question("Escolha o primeiro numero: "))
            numero2 = Number(readline.question("Escolha o segundo numero: "))
            console.log(soma(numero, numero2))
            break
        
        case "2":
            numero = Number(readline.question("Escolha o primeiro numero: "))
            numero2 = Number(readline.question("Escolha o segundo numero: "))
            console.log(subtrair(numero, numero2))
            break
        case "3":
            numero = Number(readline.question("Escolha o primeiro numero: "))
            numero2 = Number(readline.question("Escolha o segundo numero: "))
            console.log(multiplicar(numero,numero2))
            break
        case "4":
            numero = Number(readline.question("Escolha o primeiro numero: "))
            numero2 = Number(readline.question("Escolha o segundo numero: "))
            dividir(numero,numero2)
            break
            case "5":
                console.log("Saindo")
                break
        default:
            console.log("Opcao invalida")
    }

function soma(numero:number, numero2:number):number{
    return numero + numero2
}
function subtrair(numero:number, numero2:number):number{
    return numero - numero2
}
function multiplicar(numero:number, numero2:number):number{
   return numero * numero2
}
function dividir(numero:number, numero2:number):void{
    if(numero2 === 0){
        console.log("Operação invalida")
    }else {
        console.log(numero/numero2)
    }
}
}while(opcao !== "5")