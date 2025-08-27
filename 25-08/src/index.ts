import { Numero } from "./Numero";
import chalk from 'chalk';
import * as readline from 'readline-sync';
const numero:Numero = new Numero()
let numeroaleatorio = numero.numeroAleatorio()
console.log(numeroaleatorio)
let i = 0
console.log(`
    Bem-vindo(a) ao Jogo de Adivinhação!
    Tente advinhar o número entre 1 e 100
`)
let opcao = 0
do{
    
        i = i + 1
    
    opcao = Number(readline.question("Digite seu palpite: "))
    if(opcao < numeroaleatorio){
        console.log(chalk.bold.redBright("    Muito baixo! "))
    }else if(opcao > numeroaleatorio){
        console.log(chalk.bold.greenBright("    Muito alto! "))
    }else if(opcao === numeroaleatorio){
        console.log(chalk.bold.blueBright(`Parabens! Você acertou o numero ${numeroaleatorio} em ${i} tentativa(s)!)`))
    }
    

}while(opcao != numeroaleatorio)