import { IAutenticavel } from "./IAutenticavel";

export class Sistemalogin implements IAutenticavel{
    autenticar(usuario: string, senha: number): boolean {
        if(usuario === "admin" && senha === 1234){
            return true
        }else{
            return false
        }
    }
}