import chalk from "chalk";
import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario{
    salario:number
    constructor(nome:string,salario:number){
        super(nome)
        this.salario = salario
    }
    calcularSalario(): void {
       console.log (chalk.bold.green(`O salario do FuncionarioCLT é de R$ ${this.salario}`))
    }
}