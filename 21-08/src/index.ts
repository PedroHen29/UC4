import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";
import { CartaoCredito } from "./CartaoCredito";
import { Gato } from "./Gato";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";

const meuAnimal:Cachorro = new Cachorro()
const outroAnimal:Gato = new Gato()
meuAnimal.falar()
outroAnimal.falar()

const veiculos:Veiculo[] = [new Veiculo(), new Carro(), new Bicicleta()]
veiculos.forEach(veiculo => {
    veiculo.mover();
} )

const pagamentos:Pagamento[] = [new CartaoCredito(), new Boleto(), new Pagamento()]
pagamentos.forEach(formaPagemento =>{
    formaPagemento.processar()
}) 