import { IFormaGeometrica } from "./IFormaGeometrica";

export class Circulo implements IFormaGeometrica{
    raio:number
    constructor(raio:number){
        this.raio = raio
    }
    calcularArea(): number {
       let a = this.raio*this.raio
        return 3.14*a
    }
}