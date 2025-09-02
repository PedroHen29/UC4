import { Forma } from "./Forma";
import { Funcionario } from "./Funcionario";
import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";

const funcionarioCLT:FuncionarioCLT = new FuncionarioCLT("sla",1330)
const funcionarioPJ:FuncionarioPJ = new FuncionarioPJ("sla",12.59)
funcionarioCLT.calcularSalario()
funcionarioPJ.calcularSalario()
//-------------------------------------------------------------------------------
const forma:Forma[] = [new Retangulo(10,5), new Triangulo(10,5)]
forma.forEach(fromas =>{
    console.log(fromas.calcularArea())
})