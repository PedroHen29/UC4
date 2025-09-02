import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario{
    salario:number
    constructor(nome:string,salario:number){
        super(nome)
        this.salario = salario
        
    }
    calcularSalario(): void {
        this.salario*220
        console.log(this.salario)
    }
}