import chalk from "chalk";
import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario{
    salario:number
    constructor(nome:string,salario:number){
        super(nome)
        this.salario = salario
        
    }
    calcularSalario(): void {
        console.log(chalk.bold.greenBright(`O salario do funcionario PJ é de R$${this.salario*220}`))
        
    }
}