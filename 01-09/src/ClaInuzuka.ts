import chalk from "chalk";
import { Cla } from "./Cla";

export class ClaInuzuka extends Cla{
    constructor(nomedoCla:string, lider:string){
        super(nomedoCla,lider)
    }
    public habilidadeEspecial(): void {
        console.log(chalk.bold.bgMagentaBright(`
        O Clã Inuzuka tem como habilidade especial a parceria com cães ninjas (ninken) e o uso de técnicas de combate baseadas em olfato aguçado e trabalho em dupla com seus companheiros caninos.
        `))
    }
    public exibirDetalhes(): void {
        console.log(`
        Clã: Inuzuke
        Lider: Desconhecido
        `)
    }
    public ataqueEspecial(): void {
        console.log(chalk.bold.bgMagentaBright(`
        O Clã Inuzuka usa técnicas de combate junto com seus cães, combinando velocidade e força. Seus ataques giratórios, como o Gatsūga, causam grandes danos. Eles também usam o olfato aguçado para rastrear inimigos.
        `))
    }
}