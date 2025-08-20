import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{
    constructor(velocidade:number){
        super(velocidade)
    }

    public acelerar(){
        let a = this.velocidade + 20
        console.log(`O carro está a ${a} Km`)
    }
}