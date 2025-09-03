import { Administrador } from "./Administrador";
import { Cliente } from "./Cliente";
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
forma.forEach(formas =>{
    console.log(formas.calcularArea())
})
//--------------------------------------------------------------------------------
const administrador:Administrador = new Administrador("Pedro")
const cliente:Cliente = new Cliente("Erik")
administrador.autenticar("Administrador", "Admin123")
cliente.autenticar("Cliente", "Cli1234")


import { ClaAkimichi } from "./ClaAkimichi";
import { ClaHyuuga } from "./ClaHyuuga";
import { ClaNara } from "./ClaNara";
import { ClaUchiha } from "./ClaUchiha";
const personagemUchiha:ClaUchiha = new ClaUchiha("Uchiha", "Sasuke")
const personagemHyuuga:ClaHyuuga = new ClaHyuuga("Hyuuga", "Hiashi")
const personagemNara:ClaNara = new ClaNara("Nara", "Shikamaru")
const personagemAkimichi:ClaAkimichi = new ClaAkimichi("Akimichi", "Chouza")
personagemUchiha.habilidadeEspecial()
personagemHyuuga.ataqueEspecial()
