import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento {
    processar(): void {
        console.log(`Pagamento realizado com Cartão de Credito`)
    }
}