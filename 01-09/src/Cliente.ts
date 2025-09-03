import { Autenticavel } from "./Autenticavel";
import { UsuarioSistemas } from "./UsuarioSistema";

export class Cliente extends UsuarioSistemas implements Autenticavel{
    constructor(nome:string){
        super(nome)
    }
    acessarPainel(): void {
        console.log("Painel do Cliente")
    }
    autenticar(usuario: string, senha: string): boolean {
        if(usuario === "Cliente" && senha=== "Cli123"){
            this.acessarPainel()
            return true
        }else{
            console.log("Login não validado")
            return false
        }
    }
}