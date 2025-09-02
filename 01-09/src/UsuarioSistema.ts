export abstract class UsuarioSistemas {
    nome:string
    constructor(nome:string){
        this.nome = nome
    }
    abstract acessarPainel():void
}