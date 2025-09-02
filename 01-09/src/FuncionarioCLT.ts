import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario{
    salario:number
    constructor(nome:string,salario:number){
        super(nome)
        this.salario = salario
    }
    calcularSalario(): void {
       console.log (this.salario)
    }
}