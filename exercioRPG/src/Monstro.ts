import { Personagem } from "./Personagem"

export class Monstro{
    private nome:string
    private vida:number
    private forca:number

    constructor(nome:string, vida:number, forca:number){
        this.nome =  nome
        this.vida = vida
        this.forca = forca

    }

// SET && GET NOME
    getNome():string{
        return this.nome
    }
    setNome(novoNome:string):void{
        this.nome = novoNome
    }
// SET && GET VIDA
    getVida():number{
        return this.vida 
    }
    setVida(novaVida:number):void{
        this.vida = novaVida
    }
// SET && GET FORÇA
    getForca():number{
        return this.forca
    }
    setForca(novaForca:number):void{
        this.forca = novaForca
    }

    atacar(personagem:Personagem){
        personagem.dano(this)
    }

    dano(personagem:Personagem):void{
        this.vida = this.vida - personagem.getForca()
    }

}
