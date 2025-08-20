import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria{
    constructor(saldo:number){
        super(saldo)
    }

     aplicarJuros(){
         this.atualizarSaldo(10)
       console.log(`seu saldo é de ${this.saldo}`)
    }
}