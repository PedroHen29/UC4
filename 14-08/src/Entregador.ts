import { Pacote } from "./Pacote"

export class Entregador{
    private nome:string

    constructor(nome:string){
        this.nome = nome
    }
//
    entregarPacote(pacote:Pacote):void {
        console.log(`${this.nome} está entegando um pacote de ${pacote.getPeso()}Kg para ${pacote.getDestino()}`)
    }

// Método que recebe um objeto do tipo Pacote e altera sua propriedade
    trocarEndereco(pacote:Pacote, novoEndereco:string):void{
        pacote.setDestino(novoEndereco)
        console.log(`O novo endereço é ${novoEndereco}.`)
    }
}