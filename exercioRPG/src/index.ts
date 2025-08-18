import { Monstro } from "./Monstro";
import { Personagem } from "./Personagem";
import * as readline from 'readline-sync';
const personagem:Personagem = new Personagem(".", ".", 100, 10)
const monstro:Monstro = new Monstro("Dracula", 100, 10)

const nomePersonagem = readline.question("Qual é o nome do seu personagem? ")
const classePersomagem = readline.question("Qual é a classe do seu personagem? ")

personagem.setNome(nomePersonagem)
personagem.setClasse(classePersomagem)
let opcao = ""
do{
    console.log("Escolha uma ação: ")
    console.log("1 - Atacar")
    console.log("2 - Curar")
    console.log("3 - Fugir")
    opcao = readline.question("Escolha uma opção: ")

    switch(opcao){
        case "1":
            personagem.atacar(monstro)
            monstro.atacar(personagem)
            console.log(`${personagem.getNome()} esta com ${personagem.getVida()} de vida`)
        console.log(`${monstro.getNome()} está com ${monstro.getVida()} de vida`)
        break
        case "2":
            console.log(personagem.curar())
            break
        case "3":
            console.log("Você fugiu da batalha!")
    }
}while(opcao !== "3" && personagem.getVida() > 0 && monstro.getVida() > 0  )

if(personagem.getVida() === 0){
    console.log("Você morreu!")
}
if(monstro.getVida() === 0){
    console.log("Parabens, você venceu o monstro")
}