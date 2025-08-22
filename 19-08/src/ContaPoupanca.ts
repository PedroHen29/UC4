import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria{
    constructor(saldo:number){
        super(saldo)
    }

     aplicarJuros(){
        let juros = this.saldo*0.02
         this.atualizarSaldo(juros)
         
       console.log(`seu saldo é de ${this.saldo}`)
    }
}