import { Monstro } from "./Monstro"

export class Personagem{
    private nome:string
    private classe:string
    private vida:number
    private forca:number

    constructor(nome:string, classe:string, vida:number, forca:number){
        this.nome = nome
        this.classe = classe
        this.vida = vida
        this.forca = forca
    }
// GET && SET NOME
    getNome():string{
        return this.nome
    }
    setNome(novoNome:string):void{
        this.nome = novoNome
    }
// GET && SET CLASSE
    getClasse():string{
        return this.classe
    }
    setClasse(novaClasse:string):void{
        this.classe = novaClasse
    }
// GET && SET VIDA
    getVida():number{
       return this.vida
    }
    setVida(novaVida:number):void{
        this.vida = novaVida
    }
// GET && SET FORÇA
    getForca():number{
        return this.forca
    }
    setForca(novaForca:number):void{
        this.forca = novaForca
    }

    atacar(monstro:Monstro){
        monstro.dano(this)
        console.log(`Você atacou o monstro e ele te atacou de volta`)
        
        
    }

    dano(montro:Monstro ):void{
        this.vida = this.vida - montro.getForca()
    }

    curar(){
        if(this.vida < 100){
           return `Vida do Personagem ${this.vida = this.vida + 10}`
        }else{
            console.log("Não pode curar mais")
        }
}
}